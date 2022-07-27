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
            .then((response) => { return response.data.data })
    }
    async getUserQuiz(
        id
    ) {
        const response = await api.get("/user-quiz/" + id, { headers: { "Authorization": `Bearer ${AuthService.getToken()}` } });
        const userQuiz = await response.data.data;
        return userQuiz
    }
}

export default new UserQuizService();
