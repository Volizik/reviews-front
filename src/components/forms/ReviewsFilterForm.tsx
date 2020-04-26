import React, { ChangeEvent } from 'react';
import { Checkbox } from '@material-ui/core';
import { getReviewsThunk } from '../../store/review/thunks';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import { useFormik } from 'formik';
import { ReviewsFilterDTO } from '../../interfaces/review';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        label: {
            display: 'flex',
            alignItems: 'center',
        },
    }),
);
//
// const filters = [
//     {
//         label: 'Только мои отзывы',
//     }
// ]

export const ReviewsFilterForm = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const creatorId = useSelector<AppState, string>(
        (state) => state.user.info.id,
    );
    const formik = useFormik<ReviewsFilterDTO>({
        initialValues: {
            byCreator: '',
        },
        onSubmit: (values) => {
            console.log(values);
            if (!!creatorId) {
                dispatch(
                    getReviewsThunk({
                        byCreator: values.byCreator ? creatorId : '',
                    }),
                );
            }
        },
    });

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        e.persist();
        formik.handleChange(e);
        formik.submitForm();
    };

    return (
        <form onSubmit={formik.handleSubmit}>
            <label className={classes.label}>
                <Checkbox
                    onChange={onChangeHandler}
                    value={formik.values.byCreator}
                    name='byCreator'
                />
                <Typography>Только мои отзывы</Typography>
            </label>
        </form>
    );
};
