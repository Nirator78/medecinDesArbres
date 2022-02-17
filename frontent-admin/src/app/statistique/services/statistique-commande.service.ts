import { Injectable } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Injectable({
  providedIn: 'root'
})
export class StatistiqueCommandeService {

  constructor(private apiService: ApiService) {
  }

  async getTopFiveBestSeller(): Promise<any>{
    const response = await this.apiService.getTypeRequest('statistique-commande-top-five').toPromise() || {};
    return response["data"];
  }
}
