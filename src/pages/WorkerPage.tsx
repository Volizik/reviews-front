import React, { FC, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Review } from '../interfaces/review';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';
import {
    deleteReview as deleteReviewRequest,
    getReviewById,
} from '../services/review';
import { toast } from 'react-toastify';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { AlertDialog } from '../components/AlertDialog';
import DeleteIcon from '@material-ui/icons/Delete';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { getReviewsThunk } from '../store/review/thunks';
import { Worker } from '../interfaces/worker';
import { getWorkerInfoById } from '../services/worker';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        title: {
            marginBottom: 25,
            [theme.breakpoints.down('sm')]: {
                fontSize: 30,
            },
            [theme.breakpoints.down('xs')]: {
                order: 1,
            },
        },
        link: {
            color: 'white',
            textDecoration: 'none',
            marginLeft: 'auto',
        },
        authorLink: {
            padding: 10,
            marginLeft: 'auto',
        },
        card: {
            display: 'flex',
            marginTop: 30,
        },
        actionButtons: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
        },
        cardDetails: {
            position: 'relative',
            flex: 1,
            width: 'calc(100% - 160px)',
        },
    }),
);

export const WorkerPage: FC = () => {
    const { id: workerId } = useParams();
    const myId = useSelector<AppState>((state) => state.user.info.id);
    const classes = useStyles();
    const history = useHistory();
    const reviews = useSelector<AppState, Review[]>(
        (state) => state.review.list,
    );
    const [workerInfo, setWorkerInfo] = useState<Worker | undefined>(undefined);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviewsThunk({ workerId }));

        if (workerId) {
            getWorkerInfoById(workerId).then((res) => {
                console.log(res.data);
                setWorkerInfo(res.data);
            });
        }
    }, [dispatch, workerId]);

    const deleteReview = async () => {
        if (workerId) {
            const response = await deleteReviewRequest(workerId);
            history.push('/');
            toast(response.statusText, { type: 'success' });
        }
    };

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <img
                    src={workerInfo?.photos[0].src}
                    alt='avatar'
                    height={300}
                />
            </Grid>
            <Grid item xs={12} md={8}>
                <Typography variant='h3' className={classes.title}>
                    {workerInfo?.lastName} {workerInfo?.firstName}{' '}
                    {workerInfo?.fatherName}
                </Typography>

                <Typography variant='h4'>Отзывы:</Typography>
                {reviews.length ? (
                    reviews.map((review) => (
                        <Card className={classes.card} key={review.id}>
                            <div className={classes.cardDetails}>
                                <div className={classes.actionButtons}>
                                    {myId === workerInfo?.creatorId ? (
                                        <>
                                            <Link
                                                to={`/review/edit/${review.id}`}
                                                className={classes.link}>
                                                <Button
                                                    color='primary'
                                                    title='Изменить'>
                                                    <EditIcon />
                                                </Button>
                                            </Link>
                                            <AlertDialog
                                                title='Удаление отзыва'
                                                text='Вы действительно хотите удалить отзыв о своем сотруднике?'
                                                buttonComponent={(
                                                    setIsOpen,
                                                ) => (
                                                    <Button
                                                        color='primary'
                                                        title='Удалить'
                                                        onClick={() =>
                                                            setIsOpen(true)
                                                        }>
                                                        <DeleteIcon />
                                                    </Button>
                                                )}
                                                onAgree={deleteReview}
                                            />
                                        </>
                                    ) : (
                                        <Link
                                            to={`/employer/${review.creatorId}`}
                                            className={classes.authorLink}>
                                            Автор отзыва
                                        </Link>
                                    )}
                                </div>
                                <CardContent>
                                    <Typography variant='h5' gutterBottom>
                                        <strong>Адрес:</strong> {review.country}
                                        , {review.city}
                                    </Typography>
                                    <Typography variant='h5' gutterBottom>
                                        <strong>Место работы:</strong>{' '}
                                        {review.workingPlace} {review.position}
                                    </Typography>
                                    <Typography
                                        variant='h5'
                                        gutterBottom
                                        style={{ wordBreak: 'break-word' }}>
                                        {review.text}
                                    </Typography>
                                </CardContent>
                            </div>
                        </Card>
                    ))
                ) : (
                    <h4>Нет отзывов!</h4>
                )}
            </Grid>
        </Grid>
    );
};
