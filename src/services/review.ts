import { AxiosResponse } from 'axios';
import { client } from './'
import {CreateReviewDTO} from "../components/forms/CreateReviewForm";
import {ReviewItem} from "../interfaces/review";

export const getAllReviews = async (): Promise<AxiosResponse<ReviewItem[]>> => {
    return client.get('/review');
};

export const getReviewById = async (id: number): Promise<AxiosResponse<ReviewItem>> => {
    return client.get(`/review/${id}`);
};

export const createReview = async (data: CreateReviewDTO): Promise<AxiosResponse> => {
    return client.post('/review', data);
};