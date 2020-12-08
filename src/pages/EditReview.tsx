import React, { FC, useEffect, useState } from 'react';
import { ReviewForm, ReviewFormDTO } from '../components/forms/ReviewForm';
import { useHistory, useParams } from 'react-router-dom';
import { getReviewById, updateReview } from '../services/review';
import { Review } from '../interfaces/review';
import Typography from '@material-ui/core/Typography';
import { toast } from 'react-toastify';

export const EditReview: FC = () => {
    const { id } = useParams();
    const [review, setReview] = useState<Review | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const history = useHistory();

    const onSubmitHandler = (values: ReviewFormDTO, file: File | null) => {
        if (id) {
            updateReview(id, values, file)
                .then((res) => {
                    console.log(res);
                    if (res.status === 200) {
                        toast(res.statusText, { type: 'success' });
                        history.push(`/review/${res.data.id}`);
                    }
                })
                .catch((error) => toast(error.message, { type: 'error' }));
        }
    };

    useEffect(() => {
        console.log(id);
        const getReview = async () => {
            if (id) {
                setIsLoading(true);
                const response = await getReviewById(id);
                setReview(response.data);
                setIsLoading(false);
            }
        };
        getReview();
    }, [id]);

    return (
        <>
            {isLoading ? (
                <h1>Загрузка...</h1>
            ) : (
                <>
                    <Typography variant='h4' gutterBottom>
                        Редактировать отзыв о сотруднике
                    </Typography>
                    <ReviewForm
                        onSubmit={onSubmitHandler}
                        text={review?.text}
                        {...review?.worker}
                    />
                </>
            )}
        </>
    );
};
