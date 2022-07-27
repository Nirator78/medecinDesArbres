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
        const response = await axios.get(API_URL + "/user-quiz/" + id, { headers: { "Authorization": `Bearer ${AuthService.getToken()}` } });
        const command = await response.data.data;
        return command
    }
}

export default new UserQuizService();
