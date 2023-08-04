import axios from 'axios';

const apiURL = process.env.NEXT_API_URL;

const api = axios.create({
    baseURL: apiURL,
    headers: { "Access-Control-Allow-Origin": "*" }
});

export default api;