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

export const PrayerService = {
    getMyPrayers
}
