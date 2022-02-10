import { Injectable } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Injectable({
  providedIn: 'root'
})
export class PasswordKeyService {

  constructor(private apiService: ApiService) {
  }

  async getAllPasswordKey(): Promise<any>{
    const response = await this.apiService.getTypeRequest('password-keys').toPromise() || {};
    return response["data"];
  }

  async deletePasswordKey(id) {
    return await this.apiService.deleteTypeRequest(`password-key/${id}`).toPromise() || {};
  }
}
