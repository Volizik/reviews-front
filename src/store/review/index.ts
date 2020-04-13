import {ReviewsActionTypes} from "./types";
import {ReviewItem} from "../../interfaces/review";

export interface ReviewState {
    active: ReviewItem | null;
    list: ReviewItem[];
}
export const initialState: ReviewState = {
    active: null,
    list: []
};

export const reviewReducer = (state = initialState, action: ReviewsActionTypes): ReviewState => {
    switch (action.type) {
        case 'SET_REVIEWS_LIST':
            return {
                ...state,
                list: action.payload
            };
        case 'SET_ACTIVE_REVIEW':
            return {
                ...state,
                active: action.payload
            };
        default:
            return state;
    }
};
