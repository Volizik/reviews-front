import React, {FC, useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useParams } from "react-router-dom";
import {Review} from "../interfaces/review";
import {getReviewById} from "../services/review";

export const FullReview: FC = () => {
    const { id } = useParams();
    const [review, setReview] = useState<Review | null>(null)

    useEffect(() => {
        const getReview = async (id: string) => {
            const response = await getReviewById(id);
            setReview(response.data);
        }

        if (id) {
            getReview(id).catch(e => console.log(e))
        }
    }, [id]);

    return (
        <>{ review ? (
            <>
                <Typography variant="h3" gutterBottom>
                    {review.worker.lastName} {review.worker.firstName} {review.worker.fatherName}
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <img src={review.worker.photo} alt="avatar" height={300} />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h5" gutterBottom>
                            Адрес: {review.worker.workingCountry}, {review.worker.workingCity}
                        </Typography>
                        <Typography variant="h5" gutterBottom>
                            Место работы: {review.worker.workingPlace} {review.worker.workingPosition}
                        </Typography>
                        <Typography variant="h5" gutterBottom style={{wordBreak: 'break-word'}}>
                            Отзыв: {review.text}
                        </Typography>
                    </Grid>
                </Grid>
            </>) : <span>Загрузка...</span>}
        </>
    );
};
