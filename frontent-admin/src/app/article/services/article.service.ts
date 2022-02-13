import { Injectable } from '@angular/core';
import {ApiService} from "../../services/api.service";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {

  constructor(private apiService: ApiService) {
  }

  async getAllArticle(): Promise<any>{
    const response = await this.apiService.getTypeRequest('articles').toPromise() || {};
    return response["data"];
  }

  async createArticle(user) {
    const response = await this.apiService.postTypeRequest('article', user.value).toPromise() || {};
    return response["data"];
  }

  async updateArticle(user) {
    console.log(user.value);
    const response = await this.apiService.putTypeRequest('article/' + user.value.id, user.value).toPromise() || {};
    return response["data"];
  }

  async deleteArticle(id) {
    return await this.apiService.deleteTypeRequest(`article/${id}`).toPromise() || {};
  }
}
