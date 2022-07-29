import { Injectable } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private apiService: ApiService) {
  }

  async getAllCommande(): Promise<any>{
    const response = await this.apiService.getTypeRequest('commandes').toPromise() || {};
    return response["data"];
  }

  async createCommande(commande) {
    const response = await this.apiService.postTypeRequest('commande', commande.value).toPromise() || {};
    return response["data"];
  }

  async updateCommande(commande) {
    const response = await this.apiService.putTypeRequest('commande/' + commande.value.id, commande.value).toPromise() || {};
    return response["data"];
  }

  async deleteCommande(id) {
    return await this.apiService.deleteTypeRequest(`commande/${id}`).toPromise() || {};
  }
}
