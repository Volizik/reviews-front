import React, {useEffect} from 'react';
import {ShortPost} from "../components/ShortPost";
import {Review} from "../interfaces/review";
import {ReviewFilters} from "../components/ReviewFilters";
import {useDispatch, useSelector} from "react-redux";
import {getAllReviewsThunk} from "../store/review/thunks";
import {AppState} from "../store";

export const Reviews = () => {
    const reviews = useSelector<AppState, Review[]>(state => state.review.list)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllReviewsThunk());
    }, [dispatch]);

    return (
        <>
            <ReviewFilters />
            {reviews?.length ? reviews.map(({id, createdAt, worker}) => (
                <ShortPost
                    key={id}
                    id={id}
                    title={`${worker.lastName} ${worker.firstName}`}
                    description={worker.workingPosition}
                    date={new Date(createdAt).toLocaleString()}
                    image={worker.photo}
                />
            )) : <h1>Нет отзывов</h1>}
        </>
    );
}
