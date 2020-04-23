import {SetReviewsListAction} from "./types";
import {Review} from "../../interfaces/review";

export const setReviewsListAction = (list: Review[]): SetReviewsListAction => ({
    type: 'SET_REVIEWS_LIST',
    payload: list
});
