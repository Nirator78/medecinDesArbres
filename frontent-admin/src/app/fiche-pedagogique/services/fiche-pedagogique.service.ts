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

  async createFichePedagogique(fichePedagogique) {
    const response = await this.apiService.postTypeRequest('fiche-pedagogique', fichePedagogique.value).toPromise() || {};
    return response["data"];
  }

  async updateFichePedagogique(fichePedagogique) {
    const response = await this.apiService.putTypeRequest('fiche-pedagogique/' + fichePedagogique.value.id, fichePedagogique.value).toPromise() || {};
    return response["data"];
  }

  async deleteFichePedagogique(id) {
    return await this.apiService.deleteTypeRequest(`fiche-pedagogique/${id}`).toPromise() || {};
  }
}
