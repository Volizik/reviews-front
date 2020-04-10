import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBarStyled from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Menu} from "./Menu";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../store";
import {setUserIsLoggedInAction, setUserInfoAction} from "../store/user/actions";
import {removeAuthCredentials} from "../services/auth";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        },
    }),
);

export const AppBar = () =>  {
    const classes = useStyles();
    const isLoggedIn = useSelector<AppState, boolean>(state => state.user.isLoggedIn);
    const dispatch = useDispatch();

    const onLogOutHandler = () => {
        dispatch(setUserIsLoggedInAction(false));
        dispatch(setUserInfoAction({}));
        removeAuthCredentials();
    };

    return (
        <div className={classes.root}>
            <AppBarStyled position="static">
                <Toolbar>
                    <Menu />
                    <Link to='/' style={{color: "white", textDecoration: 'none'}} className={classes.title}>
                        <Typography variant="h6">
                            Site name
                        </Typography>
                    </Link>
                    {isLoggedIn ? (
                        <Button onClick={onLogOutHandler} color="inherit">Выйти</Button>
                    ) : (
                        <Link to='/login' style={{color: "white", textDecoration: 'none'}}>
                            <Button color="inherit">Войти</Button>
                        </Link>
                    )}
                </Toolbar>
            </AppBarStyled>
        </div>
    );
};
