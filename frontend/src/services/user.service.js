import AuthService from "./auth.service";
import {api} from "../utils/axios";

class UserService {

    async getOneUser(id) {
        const response = await api.get('/user/'+id);
        const user = await response;
        return response.status ? user.data : false;
    }

    async updateUser(payload) {
        if(payload.password !== AuthService.getUser().password) {
            payload.password = AuthService.encryptPassword(payload.password);
        }
        payload.role = AuthService.getUser().role;
        const response = await api.put('/user/'+ payload.id, payload, { headers: { "Authorization": `Bearer ${AuthService.getToken()}` } } );
        const user = await response; 
        if(user.data.data){
            // on met l'utilisateur modifié dans le localstorage
            localStorage.setItem("user", JSON.stringify(user.data.data));
        }
        return response.status ? user.data : false;
    }
}
export default new UserService();