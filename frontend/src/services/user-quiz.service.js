import axios from "axios"
import AuthService from "./auth.service";
const API_URL = "http://localhost:3000/api"

class UserQuizService {
    async postAnswers(
        userId,
        quiz,
        answers
    ) {
        return axios
            .post(API_URL + "/user-quiz", {
                user: userId,
                fini: 1,
                quiz: quiz,
                userQuestion: answers
            }, { headers: { "Authorization": `Bearer ${AuthService.getToken()}` } })
            .then((response) => { return response.data.data })
    }
    async getUserQuiz(
        id
    ) {
        const response = await axios.get(API_URL + "/user-quiz/" + id, { headers: { "Authorization": `Bearer ${AuthService.getToken()}` } });
        const command = await response.data.data;
        return command
    }
}

export default new UserQuizService();
