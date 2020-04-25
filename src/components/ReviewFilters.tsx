import React, {useState} from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import FilterListIcon from '@material-ui/icons/FilterList';
import Typography from '@material-ui/core/Typography';
import {Checkbox} from "@material-ui/core";
import {getAllReviewsThunk, getMyReviewsThunk} from "../store/review/thunks";
import {useDispatch, useSelector} from "react-redux";
import {AppState} from "../store";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
          marginBottom: 30,
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            flexBasis: '33.33%',
            flexShrink: 0,
        },
        label: {
            display: 'flex',
            alignItems: 'center',
        },
    }),
);

export const ReviewFilters = () => {
    const [expanded, setExpanded] = useState<boolean>(false);
    const classes = useStyles();
    const dispatch = useDispatch();
    const creatorId = useSelector<AppState, string>(state => state.user.info.id)

    return (
        <ExpansionPanel className={classes.root} expanded={expanded} onChange={() => setExpanded(prevState => !prevState)}>
            <ExpansionPanelSummary
                expandIcon={<FilterListIcon />}
                aria-controls="panel1bh-content"
            >
                <Typography className={classes.heading}>Фильтры</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <label className={classes.label}>
                    <Checkbox onChange={async (e) => {
                        e.persist();
                        if (e.target.checked && !!creatorId) {
                            dispatch(getMyReviewsThunk(creatorId))
                        } else {
                            dispatch(getAllReviewsThunk())
                        }
                    }} />
                    <Typography>Только мои отзывы</Typography>
                </label>
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
}