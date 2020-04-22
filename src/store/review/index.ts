import {ReviewsActionTypes} from "./types";
import {ReviewItem} from "../../interfaces/review";

export interface ReviewState {
    list: ReviewItem[];
}
export const initialState: ReviewState = {
    list: []
};

export const reviewReducer = (state = initialState, action: ReviewsActionTypes): ReviewState => {
    switch (action.type) {
        case 'SET_REVIEWS_LIST':
            return {
                ...state,
                list: action.payload
            };
        default:
            return state;
    }
};
