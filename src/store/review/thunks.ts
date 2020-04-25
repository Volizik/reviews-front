import {getAllReviews, getMyReviews} from "../../services/review";
import {setReviewsListAction} from "./actions";

export const getAllReviewsThunk = () => async (dispatch: any) => {
    const response = await getAllReviews();
    dispatch(setReviewsListAction(response.data))
};

export const getMyReviewsThunk = (creatorId: string) => async (dispatch: any) => {
    const response = await getMyReviews(creatorId);
    dispatch(setReviewsListAction(response.data))
};

