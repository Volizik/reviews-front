import React, {FC, useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useParams } from "react-router-dom";
import {ReviewItem} from "../interfaces/review";
import {getReviewById} from "../services/review";

export const FullReview: FC = () => {
    const { id } = useParams();
    const [review, setReview] = useState<ReviewItem | null>(null)

    useEffect(() => {
        const getReview = async (id: string) => {
            const response = await getReviewById(id);
            setReview(response.data);
        }

        if (id) {
            getReview(id).catch(e => console.log(e))
        }
    }, [id]);

    //TODO: причесать страницу одного ревью

    return (
        <>{ review ? (
            <>
                <Typography variant="h3" gutterBottom>
                    {review.lastName} {review.firstName} {review.fatherName}
                </Typography>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <img src={review.photo} alt="avatar" height={300} />
                    </Grid>
                    {/*<Grid item xs={12}>*/}
                    {/*    <Rating initialValue={rating} readOnly title="Оценка работы сотрудника" />*/}
                    {/*</Grid>*/}
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom>
                            {review.workingCountry}, {review.workingCity}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom>
                            {review.workingPlace} {review.workingPosition}
                        </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom>
                            {review.review}
                        </Typography>
                    </Grid>
                </Grid>
            </>) : <span>Загрузка...</span>}
        </>
    );
};
