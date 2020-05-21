import { AxiosResponse } from 'axios';
import { client } from './';

export const getAll = async (name?: string): Promise<AxiosResponse<Worker>> => {
    return client.get('/worker', { params: { name } });
};
