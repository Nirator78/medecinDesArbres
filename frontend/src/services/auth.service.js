import axios from "axios"
import cryptoJS from "crypto-js";
const API_URL = "http://localhost:3000/api"

class AuthService {

    encryptPassword(password){
        return cryptoJS.AES.encrypt(password, 'd6F3Efeq').toString();
    }

    login(email, password) {
        // On crypte le mot de passe avant envoei api
        password = this.encryptPassword(password);

        return axios
            .post(API_URL + "/user/login", {
                email,
                password
            })
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
    register(nom, prenom, email, password) {
        // On crypte le mot de passe avant envoei api
        password = this.encryptPassword(password);

        return axios.post(API_URL + '/user', {
            nom, prenom, email, password

        })
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
        return localStorage.getItem("token")&&localStorage.getItem("user") ? true : false
    }

}
export default new AuthService();