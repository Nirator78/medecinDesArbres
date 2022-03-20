import axios from "axios"
const API_URL = "http://localhost:3000/api"

class AuthService {
    login(email, password) {
        return axios
            .post(API_URL + "/user/login", {
                email,
                password
            })
            .then(response => {
                if (response.data.token) {
                    localStorage.setItem("user", JSON.stringify(response.data));
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
        return axios.post(API_URL + '/user', {
            nom, prenom, email, password

        })
            .then(response => {
                return response.data;
            });
    }
    getToken() {
        return localStorage.getItem("token");
    }
    getUser() {
        return localStorage.getItem("user");
    }

}
export default new AuthService();