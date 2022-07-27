import {api} from "../utils/axios";

class ConferenceService {

    async getAllConferences() {
        const response = await api.get('/conferences');
        const conferenceList = await response.data;
        return conferenceList.data;
    }

    async addUserToConference(conferenceId, userId) {
        const response = await api.post('/conference/' + conferenceId + '/user/' + userId);
        const conferenceList = await response.data;
        return conferenceList.data;
    }
}
export default new ConferenceService();