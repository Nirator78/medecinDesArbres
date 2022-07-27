import axios from "axios"
import AuthService from "./auth.service";
const API_URL = "http://localhost:3000/api";

class UserService {

    async getOneUser(id) {
        const response = await axios.get(API_URL+'/user/'+id);
        const user = await response;
        return response.status ? user.data : false;
    }

    async updateUser(payload) {
        payload.password = AuthService.encryptPassword(payload.password);
        const response = await axios.put(API_URL+'/user/'+ payload.id, payload, { headers: { "Authorization": `Bearer ${AuthService.getToken()}` } } );
        const user = await response;
        // on met l'utilisateur modifié dans le localstorage
        localStorage.setItem("user", JSON.stringify(user.data.data));
        return response.status ? user.data : false;
    }
}
export default new UserService();