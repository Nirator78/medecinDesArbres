import { Injectable } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

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

  async createQuiz(quiz) {
    const response = await this.apiService.postTypeRequest('quiz', quiz.value).toPromise() || {};
    return response["data"];
  }

  async updateQuiz(quiz) {
    const response = await this.apiService.putTypeRequest('quiz/' + quiz.value.id, quiz.value).toPromise() || {};
    return response["data"];
  }

  async deleteQuiz(id) {
    return await this.apiService.deleteTypeRequest(`quiz/${id}`).toPromise() || {};
  }

  async uploadImageQuiz(id, image) {
    const response = await this.apiService.uploadTypeRequest('quiz', id, image).toPromise() || {};
    return response["data"];
  }

  async uploadImageQuizQuestion(id, image) {
    const response = await this.apiService.uploadTypeRequest('quiz-question', id, image).toPromise() || {};
    return response["data"];
  }
}
