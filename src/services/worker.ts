import { AxiosResponse } from 'axios';
import { client } from './'

export const getAll = async (): Promise<AxiosResponse> => {
    return client.get('/worker');
};