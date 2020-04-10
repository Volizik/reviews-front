import {GetAllWorkersAction, WorkerActionTypes} from "./types";

export const addWorker = (payload: {}): WorkerActionTypes => {
    return {
        type: 'ADD_WORKER',
        payload: payload
    }
};
export const getAllWorkersAction = (list: any): GetAllWorkersAction => ({
    type: 'GET_ALL_WORKERS',
    payload: list
});
