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
import { getEmployerInfo } from '../services/employer';
import { Employer } from '../interfaces/employer';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

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
    }),
);

export const EmployerPage: FC = () => {
    const { id: employerId } = useParams();
    const classes = useStyles();
    const history = useHistory();
    const [employerInfo, setEmployerInfo] = useState<Employer | undefined>(
        undefined,
    );

    useEffect(() => {
        if (employerId) {
            getEmployerInfo(employerId).then((res) =>
                setEmployerInfo(res.data),
            );
        }
    }, []);

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={4}>
                <img
                    src={
                        'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSq_I0JFO2DxoAV3J-sI7ajtx0qW0Q5neaY_A&usqp=CAU'
                    }
                    alt='avatar'
                    height={300}
                />
            </Grid>
            <Grid item xs={12} md={8}>
                <Typography variant='h3' className={classes.title}>
                    {employerInfo?.lastName} {employerInfo?.firstName}{' '}
                </Typography>

                <Typography variant='h4'>Отзывы:</Typography>
                {/*{employerInfo?.reviews.length ? (*/}
                {/*    reviews.map(review => (*/}
                {/*        <Card className={classes.card} key={review.id}>*/}
                {/*            <div className={classes.cardDetails}>*/}
                {/*                <div className={classes.actionButtons}>*/}
                {/*                    {myId !== employerInfo?.creatorId ? (*/}
                {/*                        <>*/}
                {/*                            <Link*/}
                {/*                                to={`/review/edit/${review.id}`}*/}
                {/*                                className={classes.link}>*/}
                {/*                                <Button*/}
                {/*                                    color='primary'*/}
                {/*                                    title='Изменить'>*/}
                {/*                                    <EditIcon/>*/}
                {/*                                </Button>*/}
                {/*                            </Link>*/}
                {/*                            <AlertDialog*/}
                {/*                                title='Удаление отзыва'*/}
                {/*                                text='Вы действительно хотите удалить отзыв о своем сотруднике?'*/}
                {/*                                buttonComponent={(setIsOpen) => (*/}
                {/*                                    <Button*/}
                {/*                                        color='primary'*/}
                {/*                                        title='Удалить'*/}
                {/*                                        onClick={() => setIsOpen(true)}>*/}
                {/*                                        <DeleteIcon/>*/}
                {/*                                    </Button>*/}
                {/*                                )}*/}
                {/*                                onAgree={deleteReview}*/}
                {/*                            /></>*/}
                {/*                    ) : <Link to={`/employer/${review.creatorId}`} className={classes.authorLink}>Автор*/}
                {/*                        отзыва</Link>}*/}
                {/*                </div>*/}
                {/*                <CardContent>*/}
                {/*                    <Typography variant='h5' gutterBottom>*/}
                {/*                        <strong>Адрес:</strong> {review.country},{' '}*/}
                {/*                        {review.city}*/}
                {/*                    </Typography>*/}
                {/*                    <Typography variant='h5' gutterBottom>*/}
                {/*                        <strong>Место работы:</strong>{' '}*/}
                {/*                        {review.workingPlace} {review.position}*/}
                {/*                    </Typography>*/}
                {/*                    <Typography*/}
                {/*                        variant='h5'*/}
                {/*                        gutterBottom*/}
                {/*                        style={{ wordBreak: 'break-word' }}>*/}
                {/*                        {review.text}*/}
                {/*                    </Typography>*/}
                {/*                </CardContent>*/}
                {/*            </div>*/}
                {/*        </Card>*/}
                {/*    ))*/}
                {/*) : */}
                <h4>Нет отзывов!</h4>
                {/*}*/}
            </Grid>
        </Grid>
    );
};
