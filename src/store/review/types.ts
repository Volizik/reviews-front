import { Review } from '../../interfaces/review';

export interface SetReviewsListAction {
    type: 'SET_REVIEWS_LIST';
    payload: Review[];
}
export interface SetMyReviewsAction {
    type: 'SET_MY_REVIEWS';
    payload: Review[];
}

export type ReviewsActionTypes = SetReviewsListAction | SetMyReviewsAction;
