import axios from 'axios';
import { useAuth } from './auth.context.provider';

const http = axios.create({
    baseURL: 'https://api.spacetraders.io/v2/',
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
    },
    timeout: 5000,
});

// Set bearer token given localstorage
http.interceptors.request.use((config) => {
    const { token } = useAuth();

    // Si on a un token dans le localstorage, et qu'il y a pas de token dans la requête de base, on l'insert
    if (token && !config.headers['Authorization']) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }

    return config;
});

export default http;
