import React, { useEffect } from 'react';
import { ReviewShortPost } from '../components/ReviewShortPost';
import { Review } from '../interfaces/review';
import { useDispatch, useSelector } from 'react-redux';
import { getReviewsThunk } from '../store/review/thunks';
import { AppState } from '../store';
import { useParams } from 'react-router-dom';

export const Reviews = () => {
    const reviews = useSelector<AppState, Review[]>(
        (state) => state.review.list,
    );
    const dispatch = useDispatch();
    const { id } = useParams();

    useEffect(() => {
        dispatch(getReviewsThunk({ workerId: id }));
    }, [dispatch, id]);

    return (
        <>
            {reviews?.length ? (
                reviews.map(({ id, createdAt, worker, position, text }) => (
                    <ReviewShortPost
                        key={id}
                        id={id}
                        workerName={`${worker.lastName} ${worker.firstName} ${worker.fatherName}`}
                        workerPosition={position}
                        description={text}
                        date={new Date(createdAt).toLocaleString()}
                        image={worker.photos[0].src}
                    />
                ))
            ) : (
                <h1>Нет отзывов</h1>
            )}
        </>
    );
};
