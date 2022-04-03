import axios from "axios"
const API_URL = "http://localhost:3000/api"

class ConferenceService {

    async getAllConferences() {
        const response = await axios.get(API_URL+'/conferences');
        const conferenceList = await response.data;
        return conferenceList.data;
    }

    async addUserToConference(conferenceId, userId) {
        const response = await axios.post(API_URL+'/conference/' + conferenceId + '/user/' + userId);
        const conferenceList = await response.data;
        return conferenceList.data;
    }
}
export default new ConferenceService();