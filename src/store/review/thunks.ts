import {getAllReviews} from "../../services/review";
import {setReviewsListAction} from "./actions";

export const getAllReviewsThunk = () => async (dispatch: any) => {
    const response = await getAllReviews();
    dispatch(setReviewsListAction(response.data))
};

