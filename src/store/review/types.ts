import {ReviewItem} from "../../interfaces/review";


export interface SetReviewsListAction {
    type: 'SET_REVIEWS_LIST';
    payload: ReviewItem[];
}
export interface SetActiveReviewAction {
    type: 'SET_ACTIVE_REVIEW';
    payload: ReviewItem;
}

export type ReviewsActionTypes = SetReviewsListAction | SetActiveReviewAction;