import React, { FC } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBarStyled from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Menu, menuList } from './Menu';
import { Link, useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
    setUserIsLoggedInAction,
    setUserInfoAction,
} from '../store/user/actions';
import { isAuthenticated, removeAuthCredentials } from '../services/auth';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import Media from 'react-media';
import ListItemText from '@material-ui/core/ListItemText';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            flexGrow: 1,
        },
        title: {
            flexGrow: 1,
        },
        link: {
            color: 'white',
            textDecoration: 'none',
        },
        menu: {
            display: 'flex',
            alignItems: 'center',
        },
    }),
);

export const LoginLogoutButtons: FC = () => {
    const classes = useStyles();
    const history = useHistory();
    const dispatch = useDispatch();

    const onLogOutHandler = () => {
        dispatch(setUserIsLoggedInAction(false));
        dispatch(
            setUserInfoAction({
                lastName: '',
                id: '',
                firstName: '',
                email: '',
            }),
        );
        removeAuthCredentials();
        history.push('/');
    };

    return (
        <>
            {isAuthenticated() ? (
                <Button onClick={onLogOutHandler} color='inherit'>
                    Выйти
                </Button>
            ) : (
                <Link to='/login' className={classes.link}>
                    <Button color='inherit'>Войти</Button>
                </Link>
            )}
        </>
    );
};

export const AppBar: FC = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBarStyled position='static'>
                <Toolbar>
                    {isAuthenticated() && (
                        <Media
                            query='(max-width: 599px)'
                            render={() => <Menu />}
                        />
                    )}
                    <Link to='/' className={`${classes.title} ${classes.link}`}>
                        <Typography variant='h6'>Reviews</Typography>
                    </Link>

                    {isAuthenticated() && (
                        <Media
                            query='(min-width: 600px)'
                            render={() => (
                                <div className={classes.menu}>
                                    {menuList.map((menuItem) => (
                                        <Link
                                            to={menuItem.link}
                                            className={classes.link}
                                            key={menuItem.link}>
                                            <ListItem
                                                button
                                                title={menuItem.name}>
                                                <Media
                                                    query={{ maxWidth: 800 }}>
                                                    {(matches) =>
                                                        matches ? (
                                                            <ListItemIcon
                                                                style={{
                                                                    minWidth:
                                                                        'inherit',
                                                                    color:
                                                                        '#fff',
                                                                }}>
                                                                {menuItem.icon}
                                                            </ListItemIcon>
                                                        ) : (
                                                            <ListItemText
                                                                primary={
                                                                    menuItem.name
                                                                }
                                                            />
                                                        )
                                                    }
                                                </Media>
                                            </ListItem>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        />
                    )}
                    <LoginLogoutButtons />
                </Toolbar>
            </AppBarStyled>
        </div>
    );
};
