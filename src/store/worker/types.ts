export const ADD_WORKER = 'ADD_WORKER';
export const GET_ALL_WORKERS = 'GET_ALL_WORKERS';

export interface AddWorkerAction {
    type: typeof ADD_WORKER;
    payload: {};
}
export interface GetAllWorkersAction {
    type: typeof GET_ALL_WORKERS;
    payload: [];
}

export type WorkerActionTypes = AddWorkerAction | GetAllWorkersAction;