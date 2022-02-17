import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private apiService: ApiService) {
  }

  async getAllQuiz(): Promise<any>{
    const response = await this.apiService.getTypeRequest('quizs').toPromise() || {};
    return response["data"];
  }

  async createQuiz(user) {
    const response = await this.apiService.postTypeRequest('quiz', user.value).toPromise() || {};
    return response["data"];
  }

  async updateQuiz(user) {
    const response = await this.apiService.putTypeRequest('quiz/' + user.value.id, user.value).toPromise() || {};
    return response["data"];
  }

  async deleteQuiz(id) {
    return await this.apiService.deleteTypeRequest(`quiz/${id}`).toPromise() || {};
  }

  async uploadImageQuiz(id, image) {
    const response = await this.apiService.uploadTypeRequest('quiz', id, image).toPromise() || {};
    return response["data"];
  }
}
