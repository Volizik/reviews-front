import { Worker } from './worker';

export interface Review {
    id: number;
    text: string;
    creatorId: number;
    createdAt: string;
    updatedAt: string;
    country: string;
    city: string;
    workingPlace: string;
    position: string;
    worker: Worker;
}

export interface ReviewsFilterDTO {
    workerId?: string;
}
