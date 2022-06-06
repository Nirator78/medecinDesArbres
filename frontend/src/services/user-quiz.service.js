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
            .then((response) => { return response.status })
    }
}

export default new UserQuizService();
