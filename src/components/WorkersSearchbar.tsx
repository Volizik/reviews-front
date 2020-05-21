import React, { ChangeEvent, useEffect, useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import { useDispatch } from 'react-redux';
import { getAllWorkersThunk } from '../store/worker/thunks';
import { useDebounce } from '../hooks/useDebounce';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            padding: '2px 4px',
            marginBottom: 20,
            display: 'flex',
            alignItems: 'center',
            width: '100%',
        },
        input: {
            marginLeft: theme.spacing(1),
            flex: 1,
        },
        iconButton: {
            padding: 10,
        },
        divider: {
            height: 28,
            margin: 4,
        },
    }),
);

export const WorkersSearchbar = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 300);

    useEffect(() => {
        if (debouncedSearchTerm) {
            dispatch(getAllWorkersThunk(debouncedSearchTerm));
        } else {
            dispatch(getAllWorkersThunk());
        }
    }, [debouncedSearchTerm, dispatch]);

    const onInputChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    return (
        <Paper component='form' className={classes.root}>
            <InputBase
                className={classes.input}
                placeholder='Поиск по работникам'
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={onInputChangeHandler}
            />
            <IconButton
                type='submit'
                className={classes.iconButton}
                aria-label='search'>
                <SearchIcon />
            </IconButton>
        </Paper>
    );
};
