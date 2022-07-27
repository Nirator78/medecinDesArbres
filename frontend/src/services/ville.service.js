import {api} from "../utils/axios";

class VilleService {

    async getAllVilles() {
        const response = await api.get('/villes?limit=10');
        const fichePedagogiqueList = await response.data;
        return fichePedagogiqueList.data;
    }

}
export default new VilleService();