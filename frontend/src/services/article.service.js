import axios from "axios"
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
}

export default new ArticleService();
