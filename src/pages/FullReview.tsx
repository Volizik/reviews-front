import React, {FC, useEffect, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {Link, useParams} from "react-router-dom";
import {Review} from "../interfaces/review";
import {getReviewById} from "../services/review";
import Button from "@material-ui/core/Button";
import {useSelector} from "react-redux";
import {AppState} from "../store";

export const FullReview: FC = () => {
    const { id } = useParams();
    const [review, setReview] = useState<Review | null>(null)
    const userId = useSelector<AppState>(state => state.user.info.id)

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
                {userId === review.creatorId && (
                    <Grid container justify='flex-end'>
                        <Link to={`edit/${review.id}`} style={{color: "white", textDecoration: 'none'}}>
                            <Button variant="contained" color='primary'>Изменить</Button>
                        </Link>
                    </Grid>
                )}
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h3" gutterBottom>
                            {review.worker.lastName} {review.worker.firstName} {review.worker.fatherName}
                        </Typography>
                    </Grid>
                </Grid>

                <Grid container spacing={3}>
                    <Grid item xs={12} md={4}>
                        <img src={review.worker.photo} alt="avatar" height={300} />
                    </Grid>
                    <Grid item xs={12} md={8}>
                        <Typography variant="h5" gutterBottom>
                            Адрес проживания: {review.worker.livingCountry}, {review.worker.livingCity}
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
