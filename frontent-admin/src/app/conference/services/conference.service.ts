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

  async createConference(conference) {
    const response = await this.apiService.postTypeRequest('conference', conference.value).toPromise() || {};
    return response["data"];
  }

  async updateConference(conference) {
    const response = await this.apiService.putTypeRequest('conference/' + conference.value.id, conference.value).toPromise() || {};
    return response["data"];
  }

  async deleteConference(id) {
    return await this.apiService.deleteTypeRequest(`conference/${id}`).toPromise() || {};
  }
}
