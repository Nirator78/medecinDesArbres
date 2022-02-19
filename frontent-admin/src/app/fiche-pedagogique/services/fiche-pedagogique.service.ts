import { Injectable } from '@angular/core';
import { ApiService } from "../../services/api.service";

@Injectable({
  providedIn: 'root'
})
export class FichePedagogiqueService {

  constructor(private apiService: ApiService) {
  }

  async getAllFichePedagogique(): Promise<any>{
    const response = await this.apiService.getTypeRequest('fiche-pedagogiques').toPromise() || {};
    return response["data"];
  }

  async createFichePedagogique(user) {
    const response = await this.apiService.postTypeRequest('fiche-pedagogique', user.value).toPromise() || {};
    return response["data"];
  }

  async updateFichePedagogique(user) {
    const response = await this.apiService.putTypeRequest('fiche-pedagogique/' + user.value.id, user.value).toPromise() || {};
    return response["data"];
  }

  async deleteFichePedagogique(id) {
    return await this.apiService.deleteTypeRequest(`fiche-pedagogique/${id}`).toPromise() || {};
  }
}
