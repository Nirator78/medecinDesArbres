import AuthService from "./auth.service";
import {api} from "../utils/axios";

class QuizService {
    async getQuizs() {
        const response = await api.get('/quizs', { headers: { "Authorization": `Bearer ${AuthService.getToken()}` } });
        const quizs = await response.data.data;
        return quizs
    }
    async getQuiz(
        id
    ) {
        const response = await api.get('/quiz/' + id, { headers: { "Authorization": `Bearer ${AuthService.getToken()}` } });
        const quiz = await response.data.data;
        return quiz
    }
}

export default new QuizService();
