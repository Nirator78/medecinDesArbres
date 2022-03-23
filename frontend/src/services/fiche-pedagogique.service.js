import axios from "axios"
const API_URL = "http://localhost:3000/api"

class FichePedagogiqueService {

    async getAllFichePedagogiques() {
        const response = await axios.get(API_URL+'/fiche-pedagogiques');
        const fichePedagogiqueList = await response.data;
        return fichePedagogiqueList.data;
    }

}
export default new FichePedagogiqueService();