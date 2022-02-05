import axios from "axios"

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    params: {
        api_key:'b37c164521600a2fbb73ced550b75545',
    }
});

const dataBase = axios.create({
    baseURL: process.env.REACT_APP_DB_FIREBASE
});

export { api, dataBase }