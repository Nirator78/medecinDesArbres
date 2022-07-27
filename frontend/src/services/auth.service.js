import cryptoJS from "crypto-js";
import {api} from "../utils/axios";

class AuthService {

    encryptPassword(password) {
        return cryptoJS.AES.encrypt(password, 'd6F3Efeq').toString();
    }

    login(data) {
        // On crypte le mot de passe avant envoei api
        data.password = this.encryptPassword(data.password);

        return api
            .post("/user/login", data)
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data.data));
                    localStorage.setItem("token", JSON.stringify(response.data.token));
                }
                return response.data;
            });
    }

    logout() {
        localStorage.clear();
        window.location.reload();
    }

    register(data) {
        // On crypte le mot de passe avant envoei api
        data.password = this.encryptPassword(data.password);
        
        return api.post('/user', data)
            .then(response => {
                return response.data;
            });
    }

    getToken() {
        return JSON.parse(localStorage.getItem("token"));
    }
    
    getUser() {
        return JSON.parse(localStorage.getItem("user"));
    }

    isLogin() {
        return localStorage.getItem("token") && localStorage.getItem("user") ? true : false
    }

}
export default new AuthService();