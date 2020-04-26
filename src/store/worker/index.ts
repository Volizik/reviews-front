import { ADD_WORKER, GET_ALL_WORKERS, WorkerActionTypes } from './types';

export interface WorkerState {
    list: [];
}
export const initialState: WorkerState = {
    list: [],
};

export const workerReducer = (
    state = initialState,
    action: WorkerActionTypes,
): WorkerState => {
    switch (action.type) {
        case ADD_WORKER:
            return {
                ...state,
                ...action.payload,
            };
        case GET_ALL_WORKERS:
            return {
                ...state,
                list: action.payload,
            };
        default:
            return state;
    }
};
