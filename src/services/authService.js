import axios from 'axios';

function onSignin(email, password) {
    return axios.post('/signin',{
        email, password,
        headers: {
            'content-type': 'application/json',
        }
    })
        .then((response) => {
            if(response.data.token) {
                localStorage.setItem('currentUser', JSON.stringify(response.data))
            }
            return response
        })
        .catch(error => console.log(error));
}

function onSignup(formData) {
    return axios.post('/signup', formData, {
        headers: {
            'content-type': 'application/json'
        }
    })
        .then((response) => {
            return response.data;
        })
        .catch(error => console.log(error));
}

function onSignout() {
    localStorage.clear();
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser'));
}

export const AuthService = {
    onSignin,
    onSignup,
    onSignout,
    getCurrentUser
}
