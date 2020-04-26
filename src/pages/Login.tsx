import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useHistory } from 'react-router-dom';
import { login } from '../services/auth';
import { useFormik } from 'formik';
import { toast } from 'react-toastify';
import { setAuthCredentials } from '../services/auth';
import { useDispatch } from 'react-redux';
import { getUserInfo } from '../store/user/thunks';

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export const Login = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        onSubmit: (values) => {
            login(values)
                .then((res) => {
                    if (res.status === 200) {
                        setAuthCredentials(res.data.accessToken);
                        dispatch(getUserInfo());
                        history.push('/');
                    }
                })
                .catch((error) => toast(error.message, { type: 'error' }));
        },
    });

    return (
        <>
            <Typography component='h1' variant='h5'>
                Логин
            </Typography>
            <form
                className={classes.form}
                noValidate
                onSubmit={formik.handleSubmit}>
                <TextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    id='email'
                    label='Email'
                    name='email'
                    autoComplete='email'
                    autoFocus
                    onChange={formik.handleChange}
                />
                <TextField
                    variant='outlined'
                    margin='normal'
                    required
                    fullWidth
                    name='password'
                    label='Пароль'
                    type='password'
                    id='password'
                    autoComplete='current-password'
                    onChange={formik.handleChange}
                />
                <Button
                    type='submit'
                    fullWidth
                    variant='contained'
                    color='primary'
                    className={classes.submit}>
                    Войти
                </Button>
                <Grid container>
                    <Grid item>
                        <Link to='registration'>
                            Нет аккаунта? Зарегистрироваться
                        </Link>
                    </Grid>
                </Grid>
            </form>
        </>
    );
};
