import React, {useEffect, useState} from 'react';
import {ShortPost} from "../components/ShortPost";
import {Review} from "../interfaces/review";
import {getAllReviews} from "../services/review";
import {ReviewFilters} from "../components/ReviewFilters";

export const Reviews = () => {
    const [reviews, setReviews] = useState<Review[] | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    useEffect(() => {
        const getReviews = async () => {
            setIsLoading(true)
            const response = await getAllReviews();
            console.log(response)
            setReviews(response.data)
            setIsLoading(false)
        }
        getReviews();
    }, []);

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
            )) : (isLoading ? <h1>Загрузка...</h1> : <h1>Нет отзывов</h1>)}
        </>
    );
}
