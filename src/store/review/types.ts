import { Review } from '../../interfaces/review';

export interface SetReviewsListAction {
    type: 'SET_REVIEWS_LIST';
    payload: Review[];
}

export type ReviewsActionTypes = SetReviewsListAction;
