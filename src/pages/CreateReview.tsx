import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import {Rating} from "../components/Rating";
import Button from '@material-ui/core/Button';

export const CreateReview = () => (
    <React.Fragment>
        <Typography variant="h4" gutterBottom>
            Отзыв о сотруднике
        </Typography>
        <Grid container spacing={3}>
            <Grid item xs={12} sm={4}>
                <TextField
                    required
                    id="firstName"
                    name="firstName"
                    label="Имя"
                    fullWidth
                    autoComplete="fname"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    required
                    id="lastName"
                    name="lastName"
                    label="Фамилия"
                    fullWidth
                    autoComplete="lname"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    required
                    id="fatherName"
                    name="fatherName"
                    label="Отчество"
                    fullWidth
                    autoComplete="ftname"
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    id="living_country"
                    name="living_country"
                    label="Страна проживания"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    id="living_city"
                    name="living_city"
                    label="Город проживания"
                    fullWidth
                />
            </Grid>
            <Grid item xs={9} sm={3}>
                <TextField
                    id="living_street"
                    name="living_street"
                    label="Улица проживания"
                    fullWidth
                />
            </Grid>
            <Grid item xs={3} sm={1}>
                <TextField
                    id="living_house_number"
                    name="living_house_number"
                    label="Дом"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    id="working_country"
                    name="working_country"
                    label="Страна рабочего места"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <TextField
                    id="working_city"
                    name="working_city"
                    label="Город рабочего места"
                    fullWidth
                />
            </Grid>
            <Grid item xs={9} sm={3}>
                <TextField
                    id="working_street"
                    name="working_street"
                    label="Улица рабочего места"
                    fullWidth
                />
            </Grid>
            <Grid item xs={3} sm={1}>
                <TextField
                    id="working_house_number"
                    name="working_house_number"
                    label="Дом"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={8}>
                <TextField
                    id="working_position"
                    name="working_position"
                    label="Должность"
                    fullWidth
                />
            </Grid>
            <Grid item xs={12} sm={4}>
                <Rating title='Оценка сотрудника' />
            </Grid>
            <Grid item xs={12}>
                <TextField
                    id="review"
                    label="Отзыв о сотруднике"
                    multiline
                    fullWidth
                />
            </Grid>
        </Grid>
        <br />
        <br />
        <Button variant="contained" color="primary" disableElevation>
            Сохранить
        </Button>
    </React.Fragment>
);
