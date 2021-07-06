import axios from 'axios';
import AuthHeader from '../authHeader';

function getMyPrayers() {
    return axios.get('/myprayer', {
        headers: AuthHeader()
    })
        .then((response) => {
            return response.data
        })
        .catch((err) => {
            console.log(err);
        })
}

function onAddPrayersRequest(formData) {
    const AuthorizationHeader = AuthHeader();
    AuthorizationHeader['Content-Type'] = 'application/json';
    return axios.post('/createprayerreq', formData, {
        headers: AuthorizationHeader
    })
        .then((response) => {
            return response.data;
        })
        .catch((err) => {
            console.log(err);
        })
}

function onDeletePrayerRequest(id) {
    return axios.delete(`/deleteprayerreq/${id}`, {
        headers: AuthHeader()
    })
        .then((response) => {
            return response.data;
        })
        .catch(error => console.log(error));
}

export const PrayerService = {
    getMyPrayers,
    onAddPrayersRequest,
    onDeletePrayerRequest
}
