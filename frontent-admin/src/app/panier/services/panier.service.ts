import {Injectable} from "@angular/core";
import {ApiService} from "../../services/api.service";

@Injectable({
  providedIn: "root"
})
export class PanierService {

  constructor(private apiService: ApiService) {
  }

  async getAllPanier(): Promise<any>{
    const response = await this.apiService.getTypeRequest('paniers').toPromise() || {};
    return response["data"];
  }

  async createPanier(panier) {
    const response = await this.apiService.postTypeRequest('panier', panier.value).toPromise() || {};
    return response["data"];
  }

  async updatePanier(panier) {
    const response = await this.apiService.putTypeRequest('panier/' + panier.value.id, panier.value).toPromise() || {};
    return response["data"];
  }

  async deletePanier(id) {
    return await this.apiService.deleteTypeRequest(`panier/${id}`).toPromise() || {};
  }
}
