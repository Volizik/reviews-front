import { SetMyReviewsAction, SetReviewsListAction } from './types';
import { Review } from '../../interfaces/review';

export const setReviewsListAction = (list: Review[]): SetReviewsListAction => ({
    type: 'SET_REVIEWS_LIST',
    payload: list,
});
export const setMyReviewsAction = (list: Review[]): SetMyReviewsAction => ({
    type: 'SET_MY_REVIEWS',
    payload: list,
});
