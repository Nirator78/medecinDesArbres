import axios from "axios"
import AuthService from "./auth.service";
const API_URL = "http://localhost:3000/api"

class ArticleService {
    async getArticles() {
        const response = await axios.get(API_URL + '/articles');
        const articles = await response.data.data;
        return articles
    }
    async addToCart(
        userId,
        articleId,
        quantity
    ) {
        return axios
            .post(API_URL + "/panier", {
                user: userId,
                article: articleId,
                quantite: quantity
            })
            .then((response) => { return response.status })
    }
    async getPanier(
        userId
    ) {
        const response = await axios.get(API_URL + '/user/' + userId + '/paniers', { headers: { "Authorization": `Bearer ${AuthService.getToken()}` } });
        const paniers = await response.data.data;
        return paniers
    }
}

export default new ArticleService();
