import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import { useFormik } from 'formik';
import { registration } from '../services/auth';
import { toast } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export const Registration = () => {
    const classes = useStyles();
    const history = useHistory();
    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            registration(values)
                .then((res) => {
                    if (res.status === 201) {
                        toast('Профиль создан', { type: 'success' });
                        history.push('/login');
                    }
                })
                .catch((error) => toast(error.message, { type: 'error' }));
        },
    });

    return (
        <>
            <Typography component='h1' variant='h5'>
                Регистрация
            </Typography>
            <form
                className={classes.form}
                noValidate
                onSubmit={formik.handleSubmit}>
                <Grid container spacing={2}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            autoComplete='fname'
                            name='firstName'
                            variant='outlined'
                            required
                            fullWidth
                            id='firstName'
                            label='Имя'
                            autoFocus
                            onChange={formik.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            variant='outlined'
                            required
                            fullWidth
                            id='lastName'
                            label='Фамилия'
                            name='lastName'
                            autoComplete='lname'
                            onChange={formik.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant='outlined'
                            required
                            fullWidth
                            id='email'
                            label='Email'
                            name='email'
                            autoComplete='email'
                            onChange={formik.handleChange}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            variant='outlined'
                            required
                            fullWidth
                            name='password'
                            label='Пароль'
                            type='password'
                            id='password'
                            autoComplete='current-password'
                            onChange={formik.handleChange}
                        />
                    </Grid>
                </Grid>
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                    className={classes.submit}>
                    Зарегистрироваться
                </Button>
                <Grid container justify='flex-end'>
                    <Grid item>
                        <Link to='login'>Уже есть аккаунт? Войти</Link>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};
