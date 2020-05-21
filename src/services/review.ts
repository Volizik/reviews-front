import { AxiosResponse } from 'axios';
import { client } from './';
import { ReviewFormDTO } from '../components/forms/ReviewForm';
import { Review, ReviewsFilterDTO } from '../interfaces/review';

export const getAllReviews = async ({
    workerId,
}: ReviewsFilterDTO): Promise<AxiosResponse<Review[]>> => {
    return client.get('/review', { params: { workerId } });
};

export const getReviewById = async (
    id: string,
): Promise<AxiosResponse<Review>> => {
    return client.get(`/review/${id}`);
};

const createReviewFormData = (
    data: ReviewFormDTO,
    photo: File | null,
): FormData => {
    const formData = new FormData();

    formData.append('photo', photo || '');
    formData.append('firstName', data.firstName);
    formData.append('lastName', data.lastName);
    formData.append('fatherName', data.fatherName);
    formData.append('country', data.country);
    formData.append('city', data.city);
    formData.append('position', data.position);
    formData.append('workingPlace', data.workingPlace);
    formData.append('text', data.text);
    formData.append('tin', data.tin);

    return formData;
};

export const createReview = async (
    data: ReviewFormDTO,
    photo: File | null,
): Promise<AxiosResponse<Review>> => {
    const formData = createReviewFormData(data, photo);

    return client.post('/review', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const updateReview = async (
    reviewId: string,
    data: ReviewFormDTO,
    photo: File | null,
): Promise<AxiosResponse<Review>> => {
    const formData = createReviewFormData(data, photo);

    return client.put(`/review/${reviewId}`, formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

export const deleteReview = async (
    reviewId: string,
): Promise<AxiosResponse> => {
    return client.delete(`/review/${reviewId}`);
};

export const getMyReviews = async (
    creatorId: string,
): Promise<AxiosResponse<Review[]>> => {
    return client.get(`/review/my`, { params: { creatorId } });
};
