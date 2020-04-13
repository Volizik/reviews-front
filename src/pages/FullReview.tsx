import React, {FC, useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../store";
import { useParams } from "react-router-dom";
import {ReviewItem} from "../interfaces/review";
import {getReviewByIdThunk} from "../store/review/thunks";

// export interface Worker {
//     firstName: string;
//     lastName: string;
//     fatherName: string;
//     country: string;
//     city: string;
//     position: string;
//     review: string;
//     company: string;
//     rating: number;
//     photo: string;
// }
// const worker: Worker = {
//     firstName: 'Вася',
//     lastName: 'Пупкин',
//     fatherName: 'Владимирович',
//     country: 'Украина',
//     city: 'Донецк',
//     position: 'Продавец',
//     review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
//     company: 'Центральный рынок',
//     rating: 4,
//     photo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfzLCFRaVGHQ5WRap9sc8uFabUKtolV1J0_5I5pPRq-vr0sRnQ',
// };

export const FullReview: FC = () => {
    const { id } = useParams();
    const dispatch = useDispatch();
    const activeReview = useSelector<AppState, ReviewItem | null>(state => state.review.active);

    useEffect(() => {
        if (id) {
            dispatch(getReviewByIdThunk(Number(id)))
        }
    }, [id, dispatch]);

    return (
        <>
            {
                activeReview ? (
                    <>
                        <Typography variant="h3" gutterBottom>
                            {activeReview.lastName} {activeReview.firstName} {activeReview.fatherName}
                        </Typography>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfzLCFRaVGHQ5WRap9sc8uFabUKtolV1J0_5I5pPRq-vr0sRnQ'} alt="avatar" height={300} />
                            </Grid>
                            {/*<Grid item xs={12}>*/}
                            {/*    <Rating initialValue={rating} readOnly title="Оценка работы сотрудника" />*/}
                            {/*</Grid>*/}
                            <Grid item xs={12}>
                                <Typography variant="h5" gutterBottom>
                                    {activeReview.workingCountry}, {activeReview.workingCity}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5" gutterBottom>
                                    {activeReview.workingPosition}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h5" gutterBottom>
                                    {activeReview.review}
                                </Typography>
                            </Grid>
                        </Grid>
                    </>
                ) : <span>Загрузка...</span>
            }

        </>
    );
};
