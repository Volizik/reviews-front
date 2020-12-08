import { AxiosResponse } from 'axios';
import { client } from './index';
import { Employer } from '../interfaces/employer';

export const getEmployerInfo = async (
    id: string,
): Promise<AxiosResponse<Employer>> => {
    return client.get(`/user/${id}`);
};
