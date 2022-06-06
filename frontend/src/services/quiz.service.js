import axios from "axios"
import AuthService from "./auth.service";
const API_URL = "http://localhost:3000/api"

class QuizService {
    async getQuizs() {
        const response = await axios.get(API_URL + '/quizs', { headers: { "Authorization": `Bearer ${AuthService.getToken()}` } });
        const command = await response.data.data;
        return command
    }
    async getQuiz(
        id
    ) {
        const response = await axios.get(API_URL + '/quiz/' + id, { headers: { "Authorization": `Bearer ${AuthService.getToken()}` } });
        const command = await response.data.data;
        return command
    }
}

export default new QuizService();
