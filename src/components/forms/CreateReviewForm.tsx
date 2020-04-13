import React from 'react';
import { useFormik } from 'formik';
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {createReview} from "../../services/review";
import {toast} from "react-toastify";
import {useHistory} from "react-router-dom";

export interface CreateReviewDTO {
    firstName: string;
    lastName: string;
    fatherName: string;
    livingCountry: string;
    livingCity: string;
    livingStreet: string;
    livingHouseNumber: string;
    workingCountry: string;
    workingCity: string;
    workingStreet: string;
    workingHouseNumber: string;
    workingPosition: string;
    review: string;
}

export const CreateReviewForm = () => {
    const history = useHistory();
    const formik = useFormik<CreateReviewDTO>({
        initialValues: {
            firstName: '',
            lastName: '',
            fatherName: '',
            livingCountry: '',
            livingCity: '',
            livingStreet: '',
            livingHouseNumber: '',
            workingCountry: '',
            workingCity: '',
            workingStreet: '',
            workingHouseNumber: '',
            workingPosition: '',
            review: '',
        },
        onSubmit: values => {
            createReview(values)
                .then((res) => {
                    if (res.status === 201) {
                        toast(res.statusText, {type: "success"});
                        history.push('/');
                    }
                })
                .catch(error => toast(error.message, {type: "error"}));
        },
    });

    return (
        <form onSubmit={formik.handleSubmit}>
            <Typography variant="h4" gutterBottom>
                Добавить отзыв о сотруднике
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Фамилия"
                        fullWidth
                        autoComplete="lastname"
                        onChange={formik.handleChange}
                        value={formik.values.lastName}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="Имя"
                        fullWidth
                        autoComplete="firstname"
                        onChange={formik.handleChange}
                        value={formik.values.firstName}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        required
                        id="fatherName"
                        name="fatherName"
                        label="Отчество"
                        fullWidth
                        autoComplete="fathertname"
                        onChange={formik.handleChange}
                        value={formik.values.fatherName}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="living_country"
                        name="livingCountry"
                        label="Страна проживания"
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.livingCountry}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="living_city"
                        name="livingCity"
                        label="Город проживания"
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.livingCity}
                    />
                </Grid>
                <Grid item xs={9} sm={3}>
                    <TextField
                        id="living_street"
                        name="livingStreet"
                        label="Улица проживания"
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.livingStreet}
                    />
                </Grid>
                <Grid item xs={3} sm={1}>
                    <TextField
                        id="living_house_number"
                        name="livingHouseNumber"
                        label="Дом"
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.livingHouseNumber}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="working_country"
                        name="workingCountry"
                        label="Страна рабочего места"
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.workingCountry}
                    />
                </Grid>
                <Grid item xs={12} sm={4}>
                    <TextField
                        id="working_city"
                        name="workingCity"
                        label="Город рабочего места"
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.workingCity}
                    />
                </Grid>
                <Grid item xs={9} sm={3}>
                    <TextField
                        id="working_street"
                        name="workingStreet"
                        label="Улица рабочего места"
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.workingStreet}
                    />
                </Grid>
                <Grid item xs={3} sm={1}>
                    <TextField
                        id="working_house_number"
                        name="workingHouseNumber"
                        label="Дом"
                        fullWidth
                        onChange={formik.handleChange}
                        value={formik.values.workingHouseNumber}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="working_position"
                        name="workingPosition"
                        label="Должность"
                        fullWidth
                        required
                        onChange={formik.handleChange}
                        value={formik.values.workingPosition}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        id="review"
                        label="Отзыв о сотруднике"
                        name='review'
                        multiline
                        fullWidth
                        required
                        onChange={formik.handleChange}
                        value={formik.values.review}
                    />
                </Grid>
            </Grid>
            <br />
            <br />
            <Button variant="contained" color="primary" disableElevation type='submit' fullWidth >
                Сохранить
            </Button>
        </form>
    );
};
