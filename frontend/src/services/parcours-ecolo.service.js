import AuthService from '../services/auth.service';
import {api} from "../utils/axios";

class ParcoursEcoloService {

    async getAllParcoursEcolos() {
        const response = await api.get('/parcours-ecolos');
        const parcoursEcoloList = await response.data;
        return parcoursEcoloList.data;
    }

    async getOneParcoursEcolo(id) {
        const response = await api.get('/parcours-ecolo/'+id);
        const parcoursEcolo = await response;
        return response.status ? parcoursEcolo.data : false;
    }

    async getParcoursEcoloByUser(userId) {
        const response = await api.get(`/user/${userId}/parcours-ecolo`, { headers: {"Authorization" : `Bearer ${AuthService.getToken()}`} });
        const parcoursEcoloList = await response.data;
        return response.status ? parcoursEcoloList.data : false;
    }

    async createParcoursEcolo(payload) {
        const response = await api.post('/parcours-ecolo', payload, { headers: {"Authorization" : `Bearer ${AuthService.getToken()}`} });
        const parcoursEcolo = await response;
        return response.status ? parcoursEcolo.data : false;
    }

    async deleteParcoursEcolo(id) {
        const response = await api.delete('/parcours-ecolo/'+id, { headers: {"Authorization" : `Bearer ${AuthService.getToken()}`} });
        const parcoursEcolo = await response;
        return response.status ? parcoursEcolo.statut : false;
    }

    async uplaodParcoursEcoloImage(image, id) {
        const formData = new FormData();
        formData.append("image", image);
        const response = await api.post('/upload/parcours-ecolo/'+id, formData);
        const imageParcoursEcolo = await response;
        return response.status ? imageParcoursEcolo : false;
    }

    async getStatistiqueParcoursEcolo() {
        const response = await api.get('/statistique-parcours-ecolo');
        const StatistiqueParcoursEcolo = await response.data;
        return StatistiqueParcoursEcolo.data;
    }

    async getStatistiqueParcoursEcoloTopFive() {
        const response = await api.get('/statistique-parcours-ecolo-top-five');
        const StatistiqueParcoursEcoloTopFive = await response.data;
        return StatistiqueParcoursEcoloTopFive.data;
    }

}
export default new ParcoursEcoloService();