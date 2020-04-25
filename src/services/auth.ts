import { client } from './';
import {AxiosResponse} from "axios";

interface RegistrationDTO {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
}
interface LoginDTO {
    email: string;
    password: string;
}

export const setAuthCredentials = (token: string) => {
    localStorage.setItem('token', token);
    setAuthHeaders(token);
};

export const isAuthenticated = () => !!localStorage.getItem('token');

export const setAuthHeaders = (token: string) => {
    client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export const removeAuthCredentials = () => {
    localStorage.removeItem('token');
    delete client.defaults.headers.common['Authorization'];
};

export const registration = (data: RegistrationDTO): Promise<AxiosResponse> => {
    return client.post('/auth/registration', data);
};

export const login = (data: LoginDTO): Promise<AxiosResponse<{accessToken: string}>> => {
    return client.post('/auth/login', data);
};
