import React from 'react';
import {ShortPost} from "../components/ShortPost";
import {useSelector} from "react-redux";
import {AppState} from "../store";
import {ReviewItem} from "../interfaces/review";

export const Reviews = () => {
    const reviews = useSelector<AppState, ReviewItem[]>(state => state.review.list);

    return (
        <>
            {reviews.map(({firstName, lastName, workingPosition, id}) => (
                <ShortPost
                    key={id}
                    id={id}
                    title={`${lastName} ${firstName}`}
                    description={workingPosition}
                    date='Сегодня'
                    image='https://tinyjpg.com/images/social/website.jpg'
                />
            ))}
        </>
    );
}
