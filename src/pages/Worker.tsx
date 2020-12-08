import React, { FC, useEffect, useState } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { Review } from '../interfaces/review';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../store';
import { deleteReview, getReviewById } from '../services/review';
import { toast } from 'react-toastify';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EditIcon from '@material-ui/icons/Edit';
import { AlertDialog } from '../components/AlertDialog';
import DeleteIcon from '@material-ui/icons/Delete';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { getReviewsThunk } from '../store/review/thunks';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        titleWrap: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: 25,
            [theme.breakpoints.down('xs')]: {
                flexWrap: 'wrap',
            },
        },
        title: {
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
    }),
);

export const Worker: FC = () => {
    const { id } = useParams();
    const [review, setReview] = useState<Review | null>(null);
    const userId = useSelector<AppState>((state) => state.user.info.id);
    const classes = useStyles();
    const history = useHistory();
    const reviews = useSelector<AppState, Review[]>(
        (state) => state.review.list,
    );
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getReviewsThunk({ workerId: id }));
    }, [dispatch, id]);

    useEffect(() => {
        const getReview = async (id: string) => {
            const response = await getReviewById(id);
            setReview(response.data);
        };

        if (id) {
            getReview(id).catch((e) => console.log(e));
        }
    }, [id]);

    const deleteReviewHandler = async () => {
        if (id) {
            const response = await deleteReview(id);
            history.push('/');
            toast(response.statusText, { type: 'success' });
        }
    };

    return (
        <>
            {review ? (
                <>
                    <Grid container spacing={3}>
                        <Grid item xs={12} className={classes.titleWrap}>
                            <Typography variant='h3' className={classes.title}>
                                {review.worker.lastName}{' '}
                                {review.worker.firstName}{' '}
                                {review.worker.fatherName}
                            </Typography>
                            {userId === review.creatorId && (
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
                                        buttonComponent={(setIsOpen) => (
                                            <Button
                                                color='primary'
                                                title='Удалить'
                                                onClick={() => setIsOpen(true)}>
                                                <DeleteIcon />
                                            </Button>
                                        )}
                                        onAgree={deleteReviewHandler}
                                    />
                                </>
                            )}
                        </Grid>
                    </Grid>

                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <img
                                src={review.worker.photos[0].src}
                                alt='avatar'
                                height={300}
                            />
                        </Grid>
                        <Grid item xs={12} md={8}>
                            <Typography variant='h5' gutterBottom>
                                <strong>Адрес:</strong> {review.country},{' '}
                                {review.city}
                            </Typography>
                            <Typography variant='h5' gutterBottom>
                                <strong>Место работы:</strong>{' '}
                                {review.workingPlace} {review.position}
                            </Typography>
                            <Typography
                                variant='h5'
                                gutterBottom
                                style={{ wordBreak: 'break-word' }}>
                                <strong>Отзыв:</strong> {review.text}
                            </Typography>
                        </Grid>
                    </Grid>
                </>
            ) : (
                <span>Загрузка...</span>
            )}
        </>
    );
};
