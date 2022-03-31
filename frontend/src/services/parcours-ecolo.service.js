import axios from "axios"
const API_URL = "http://localhost:3000/api"

class ParcoursEcoloService {

    async getAllParcoursEcolos() {
        const response = await axios.get(API_URL+'/parcours-ecolos');
        const parcoursEcoloList = await response.data;
        return parcoursEcoloList.data;
    }

    async getOneParcoursEcolo(id) {
        const response = await axios.get(API_URL+'/parcours-ecolo/'+id);
        const parcoursEcolo = await response;
        return response.status ? parcoursEcolo.data : false;
    }

    async createParcoursEcolo(payload) {
        const response = await axios.post(API_URL+'/parcours-ecolo', payload);
        const parcoursEcolo = await response;
        return response.status ? parcoursEcolo.data : false;
    }

    async deleteParcoursEcolo(id) {
        const response = await axios.delete(API_URL+'/parcours-ecolo/'+id);
        const parcoursEcolo = await response;
        return response.status ? parcoursEcolo.statut : false;
    }

    async uplaodParcoursEcoloImage(image, id) {
        const formData = new FormData();
        formData.append("image", image);
        const response = await axios.post(API_URL+'/upload/parcours-ecolo/'+id, formData);
        const imageParcoursEcolo = await response;
        return response.status ? imageParcoursEcolo : false;
    }

}
export default new ParcoursEcoloService();