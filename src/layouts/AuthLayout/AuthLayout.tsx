import React, {FC} from 'react';
import Container from "@material-ui/core/Container";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import {makeStyles} from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import { Copyright } from '../../components/Copyright';
import { Redirect } from 'react-router-dom';
import {useSelector} from "react-redux";
import {AppState} from "../../store";
import {toast} from "react-toastify";

const useStyles = makeStyles((theme) => ({
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
}));

export const AuthLayout: FC = ({ children }) => {
    const classes = useStyles();
    const isLoggedIn = useSelector<AppState, boolean>(state => state.user.isLoggedIn);

    return (
        <>
            {isLoggedIn ? (
                <>
                    {toast('Вы уже авторизованы', {type: "error"})}
                    <Redirect to='/' />
                </>
                ) : (
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <div className={classes.paper}>
                        <Avatar className={classes.avatar}>
                            <LockOutlinedIcon />
                        </Avatar>
                        {children}
                    </div>
                    <Box mt={8}>
                        <Copyright />
                    </Box>
                </Container>
            )}
          }
        </>
    );
};
