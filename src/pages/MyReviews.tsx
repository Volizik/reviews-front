import React, { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';
import { Review } from '../interfaces/review';
import { ReviewShortPost } from '../components/ReviewShortPost';
import { getMyReviewsThunk } from '../store/review/thunks';

export const MyReviews: FC = () => {
    const myId = useSelector<AppState, string>((state) => state.user.info.id);
    const reviews = useSelector<AppState, Review[]>((state) => state.review.my);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getMyReviewsThunk(myId));
    }, [myId, dispatch]);

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
