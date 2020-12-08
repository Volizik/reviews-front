import { Worker } from './worker';

export interface Employer {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    workers: Worker[];
}
