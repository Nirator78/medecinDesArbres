import axios from "axios"
const API_URL = "http://localhost:3000/api"

class VilleService {

    async getAllVilles() {
        const response = await axios.get(API_URL+'/villes?limit=10');
        const fichePedagogiqueList = await response.data;
        return fichePedagogiqueList.data;
    }

}
export default new VilleService();