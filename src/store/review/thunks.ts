import {getAllReviews, getReviewById} from "../../services/review";
import {setReviewsListAction, setReviewAction} from "./actions";

export const getAllReviewsThunk = () => async (dispatch: any) => {
    const response = await getAllReviews();

    console.log(response);

    dispatch(setReviewsListAction(response.data))
};

export const getReviewByIdThunk = (id: number) => async (dispatch: any) => {
    const response = await getReviewById(id);

    console.log(response);

    dispatch(setReviewAction(response.data))
};
