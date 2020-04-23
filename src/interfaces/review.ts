import {Worker} from "./worker";

export interface Review {
    id: number;
    text: string;
    creatorId: number;
    workerId: number;
    createdAt: string;
    worker: Worker;
}