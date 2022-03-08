import {Injectable} from "@angular/core";
import {ApiService} from "../../services/api.service";

@Injectable({
  providedIn: "root"
})
export class UserService {

  constructor(private apiService: ApiService) {
  }

  async getAllUser(): Promise<any>{
    const response = await this.apiService.getTypeRequest('users').toPromise() || {};
    return response["data"];
  }

  async createUser(user) {
    const response = await this.apiService.postTypeRequest('user', user.value).toPromise() || {};
    return response["data"];
  }

  async updateUser(user) {
    const response = await this.apiService.putTypeRequest('user/' + user.value.id, user.value).toPromise() || {};
    return response["data"];
  }

  async deleteUser(id) {
    return await this.apiService.deleteTypeRequest(`user/${id}`).toPromise() || {};
  }
}
