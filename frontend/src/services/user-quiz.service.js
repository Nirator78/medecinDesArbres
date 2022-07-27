import AuthService from "./auth.service";
import {api} from "../utils/axios";

class UserQuizService {
    async postAnswers(
        userId,
        quiz,
        answers
    ) {
        return api
            .post("/user-quiz", {
                user: userId,
                fini: 1,
                quiz: quiz,
                userQuestion: answers
            }, { headers: { "Authorization": `Bearer ${AuthService.getToken()}` } })
            .then((response) => { return response.status })
    }
}

export default new UserQuizService();
