import { AxiosResponse } from 'axios';
import { client } from './';
import { Worker } from '../interfaces/worker';

export const getAll = async (
    name?: string,
): Promise<AxiosResponse<Worker[]>> => {
    return client.get('/worker', { params: { name } });
};

export const getWorkerInfoById = async (
    id: string,
): Promise<AxiosResponse<Worker>> => {
    return client.get(`/worker/${id}`);
};
