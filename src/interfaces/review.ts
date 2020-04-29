import { Worker } from './worker';

export interface Review {
    id: number;
    text: string;
    creatorId: number;
    createdAt: string;
    updatedAt: string;
    worker: Worker;
}

export interface ReviewsFilterDTO {
    byCreator?: string;
}
