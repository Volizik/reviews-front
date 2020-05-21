import { ReviewsActionTypes } from './types';
import { Review } from '../../interfaces/review';

export interface ReviewState {
    list: Review[];
    my: Review[];
}
export const initialState: ReviewState = {
    list: [],
    my: [],
};

export const reviewReducer = (
    state = initialState,
    action: ReviewsActionTypes,
): ReviewState => {
    switch (action.type) {
        case 'SET_REVIEWS_LIST':
            return {
                ...state,
                list: action.payload,
            };
        case 'SET_MY_REVIEWS':
            return {
                ...state,
                my: action.payload,
            };
        default:
            return state;
    }
};
