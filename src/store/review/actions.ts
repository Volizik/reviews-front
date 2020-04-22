import {SetReviewsListAction} from "./types";
import {ReviewItem} from "../../interfaces/review";

export const setReviewsListAction = (list: ReviewItem[]): SetReviewsListAction => ({
    type: 'SET_REVIEWS_LIST',
    payload: list
});
