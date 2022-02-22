import { Injectable } from '@angular/core';
import { ApiService } from "../../services/api.service";

@Injectable({
  providedIn: 'root'
})
export class ConferenceService {

  constructor(private apiService: ApiService) {
  }

  async getAllConference(): Promise<any>{
    const response = await this.apiService.getTypeRequest('conferences').toPromise() || {};
    return response["data"];
  }

  async createConference(user) {
    const response = await this.apiService.postTypeRequest('conference', user.value).toPromise() || {};
    return response["data"];
  }

  async updateConference(user) {
    const response = await this.apiService.putTypeRequest('conference/' + user.value.id, user.value).toPromise() || {};
    return response["data"];
  }

  async deleteConference(id) {
    return await this.apiService.deleteTypeRequest(`conference/${id}`).toPromise() || {};
  }
}
