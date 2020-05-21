import { getAllReviews, getMyReviews } from '../../services/review';
import { setMyReviewsAction, setReviewsListAction } from './actions';
import { ReviewsFilterDTO } from '../../interfaces/review';

export const getReviewsThunk = (reviewsFilterDTO: ReviewsFilterDTO) => async (
    dispatch: any,
) => {
    const response = await getAllReviews(reviewsFilterDTO);
    dispatch(setReviewsListAction(response.data));
};

export const getMyReviewsThunk = (creatorId: string) => async (
    dispatch: any,
) => {
    const response = await getMyReviews(creatorId);
    dispatch(setMyReviewsAction(response.data));
};

// export const getReviewsByFilters = (reviewsFilterDTO: ReviewsFilterDTO) => async (dispatch: any) => {
//     const response = await getMyReviews(reviewsFilterDTO);
//     dispatch(setReviewsListAction(response.data))
// };
