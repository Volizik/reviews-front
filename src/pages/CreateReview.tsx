import React, { FC } from 'react';
import { ReviewForm, ReviewFormDTO } from '../components/forms/ReviewForm';
import { createReview } from '../services/review';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

export const CreateReview: FC = () => {
    const history = useHistory();

    const onSubmitHandler = (values: ReviewFormDTO, file: File | null) => {
        createReview(values, file)
            .then((res) => {
                if (res.status === 201) {
                    toast(res.statusText, { type: 'success' });
                    history.push('/');
                }
            })
            .catch((error) => toast(error.message, { type: 'error' }));
    };

    return (
        <>
            <Typography variant='h4' gutterBottom>
                Добавить отзыв о сотруднике
            </Typography>
            <ReviewForm onSubmit={onSubmitHandler} />
        </>
    );
};
