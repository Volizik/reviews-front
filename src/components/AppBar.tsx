import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBarStyled from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import {Menu} from "./Menu";

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

    return (
        <div className={classes.root}>
            <AppBarStyled position="static">
                <Toolbar>
                    <Menu />
                    <Typography variant="h6" className={classes.title}>
                        Site name
                    </Typography>
                    <Button color="inherit">Login</Button>
                </Toolbar>
            </AppBarStyled>
        </div>
    );
};
