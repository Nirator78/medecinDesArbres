import { Injectable } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Injectable({
  providedIn: 'root'
})
export class ParcoursEcoloService {

  constructor(private apiService: ApiService) {
  }

  async getAllParcoursEcolo(): Promise<any>{
    const response = await this.apiService.getTypeRequest('parcours-ecolos').toPromise() || {};
    return response["data"];
  }

  async createParcoursEcolo(parcoursEcolo) {
    const response = await this.apiService.postTypeRequest('parcours-ecolo', parcoursEcolo.value).toPromise() || {};
    return response["data"];
  }

  async updateParcoursEcolo(parcoursEcolo) {
    const response = await this.apiService.putTypeRequest('parcours-ecolo/' + parcoursEcolo.value.id, parcoursEcolo.value).toPromise() || {};
    return response["data"];
  }

  async deleteParcoursEcolo(id) {
    return await this.apiService.deleteTypeRequest(`parcours-ecolo/${id}`).toPromise() || {};
  }

  async uploadImageParcoursEcolo(id, image) {
    const response = await this.apiService.uploadTypeRequest('parcours-ecolo', id, image).toPromise() || {};
    return response["data"];
  }
}
