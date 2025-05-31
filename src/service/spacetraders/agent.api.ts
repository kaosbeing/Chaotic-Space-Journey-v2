import http from '../http.service';
import { Register } from '../dto/register.dto';
import { RegisterResponse } from '../dto/registerResponse.dto';
import { AxiosHeaders } from 'axios';

export const register = async (request: Register): Promise<RegisterResponse> => {
    const header = {
        'Authorization': 'Bearer ' + request.bearer
    };
    delete request.bearer;

    return http.post('/register', request, {
        headers: header
    }).then((response) => {
        return response.data.data;
    });
};

export const getAgent = async (token = '') => {
    const config = { headers: {} as AxiosHeaders };

    if (token) {
        config.headers['Authorization'] = 'Bearer ' + token;
    }

    return http.get('/my/agent', config).then((response) => response.data);
};