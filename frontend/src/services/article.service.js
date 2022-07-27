import AuthService from "./auth.service";
import {api} from "../utils/axios";

class ArticleService {
    async getArticles(
        limit = false
    ) {
        if (limit) {
            const response = await api.get('/articles?limit=' + limit);
            const articles = await response.data.data;
            return articles
        }
        else {
            const response = await api.get('/articles');
            const articles = await response.data.data;
            return articles
        }
    }
    async addToCart(
        userId,
        articleId,
        quantity
    ) {
        return api
            .post("/panier", {
                user: userId,
                article: articleId,
                quantite: quantity
            }, { headers: { "Authorization": `Bearer ${AuthService.getToken()}` } })
            .then((response) => { return response.status })
    }
    async getPanier(
        userId
    ) {
        const response = await api.get('/user/' + userId + '/paniers', { headers: { "Authorization": `Bearer ${AuthService.getToken()}` } });
        const paniers = await response.data.data;
        return paniers
    }
    async postCommand(
        userId
    ) {
        const response = await api.post('/user/' + userId + '/panier', {}, { headers: { "Authorization": `Bearer ${AuthService.getToken()}` } });
        const command = await response.data;
        return command
    }
    async getCommand(
        userId
    ) {
        const response = await api.get('/user/' + userId + '/commandes', { headers: { "Authorization": `Bearer ${AuthService.getToken()}` } });
        const command = await response.data.data;
        return command
    }
}

export default new ArticleService();
