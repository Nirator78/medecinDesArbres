import { Injectable } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Injectable({
  providedIn: 'root'
})
export class VilleService {

  constructor(private apiService: ApiService) {
  }

  async getAllVille(): Promise<any>{
    const response = await this.apiService.getTypeRequest('villes?limit=10').toPromise() || {};
    return response["data"];
  }
}
