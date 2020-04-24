import {Worker} from "./worker";

export interface Review {
    id: number;
    text: string;
    creatorId: number;
    createdAt: string;
    worker: Worker;
}