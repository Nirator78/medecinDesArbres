import AuthService from "./auth.service";
import {api} from "../utils/axios";

class UserService {

    async getOneUser(id) {
        const response = await api.get('/user/'+id);
        const user = await response;
        return response.status ? user.data : false;
    }

    async updateUser(payload) {
        payload.password = AuthService.encryptPassword(payload.password);
        const response = await api.put('/user/'+ payload.id, payload, { headers: { "Authorization": `Bearer ${AuthService.getToken()}` } } );
        const user = await response;
        // on met l'utilisateur modifié dans le localstorage
        localStorage.setItem("user", JSON.stringify(user.data.data));
        return response.status ? user.data : false;
    }
}
export default new UserService();