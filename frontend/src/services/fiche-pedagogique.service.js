import {api} from "../utils/axios";

class FichePedagogiqueService {

    async getAllFichePedagogiques() {
        const response = await api.get('/fiche-pedagogiques');
        const fichePedagogiqueList = await response.data;
        return fichePedagogiqueList.data;
    }

    async getOneFichePedagogique(id) {
        const response = await api.get('/fiche-pedagogique/'+id);
        const fichePedagogique = await response;
        return response.status ? fichePedagogique.data : false;
    }

}
export default new FichePedagogiqueService();