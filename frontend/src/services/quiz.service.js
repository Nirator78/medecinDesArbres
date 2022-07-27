import AuthService from "./auth.service";
import {api} from "../utils/axios";

class QuizService {
    async getQuizs() {
        const response = await api.get('/quizs', { headers: { "Authorization": `Bearer ${AuthService.getToken()}` } });
        const command = await response.data.data;
        return command
    }
    async getQuiz(
        id
    ) {
        const response = await api.get('/quiz/' + id, { headers: { "Authorization": `Bearer ${AuthService.getToken()}` } });
        const command = await response.data.data;
        return command
    }
}

export default new QuizService();
