import axios from "axios"

const api = axios.create({
    baseURL: process.env.API_MOVIES,
    params: {
        api_key:process.env.API_KEY,
    }
});

const dataBase = axios.create({
    baseURL: process.env.REACT_APP_DB_FIREBASE
});

export { api, dataBase }