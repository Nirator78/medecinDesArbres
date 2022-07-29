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

  async createArticle(article) {
    const response = await this.apiService.postTypeRequest('article', article.value).toPromise() || {};
    return response["data"];
  }

  async updateArticle(article) {
    const response = await this.apiService.putTypeRequest('article/' + article.value.id, article.value).toPromise() || {};
    return response["data"];
  }

  async deleteArticle(id) {
    return await this.apiService.deleteTypeRequest(`article/${id}`).toPromise() || {};
  }

  async uploadImageArticle(id, image) {
    const response = await this.apiService.uploadTypeRequest('article', id, image).toPromise() || {};
    return response["data"];
  }
}
