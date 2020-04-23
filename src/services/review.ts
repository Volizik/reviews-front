import { AxiosResponse } from 'axios';
import { client } from './'
import {CreateReviewDTO} from "../components/forms/CreateReviewForm";
import {Review} from "../interfaces/review";

export const getAllReviews = async (): Promise<AxiosResponse<Review[]>> => {
    return client.get('/review');
};

export const getReviewById = async (id: string): Promise<AxiosResponse<Review>> => {
    return client.get(`/review/${id}`);
};

export const createReview = async (data: CreateReviewDTO, photo: File | null): Promise<AxiosResponse> => {
    const formData = new FormData();

    formData.append('photo', photo || '');
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('fatherName', data.fatherName);
    formData.append('livingCountry', data.livingCountry);
    formData.append('livingCity', data.livingCity);
    formData.append('livingStreet', data.livingStreet);
    formData.append('livingHouseNumber', data.livingHouseNumber);
    formData.append('workingCountry', data.workingCountry);
    formData.append('workingCity', data.workingCity);
    formData.append('workingStreet', data.workingStreet);
    formData.append('workingHouseNumber', data.workingHouseNumber);
    formData.append('workingPosition', data.workingPosition);
    formData.append('workingPlace', data.workingPlace);
    formData.append('text', data.text);

    return client.post('/review', formData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    });
};