import { Injectable } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Injectable({
  providedIn: 'root'
})
export class StatistiqueQuizService {

  constructor(private apiService: ApiService) {
  }

  async getQuizMeilleurJoueur(): Promise<any>{
    const response = await this.apiService.getTypeRequest('statistique-quiz-meilleur-joueur').toPromise() || {};
    return response["data"];
  }

  async getQuizRatioReponseTop(): Promise<any>{
    const response = await this.apiService.getTypeRequest('statistique-quiz-ratio-reponse-top').toPromise() || {};
    return response["data"];
  }

  async getQuizScoreMoyen(): Promise<any>{
    const response = await this.apiService.getTypeRequest('statistique-quiz-score-moyen').toPromise() || {};
    return response["data"];
  }
}
