import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import FilterListIcon from '@material-ui/icons/FilterList';
import Typography from '@material-ui/core/Typography';
import { ReviewsFilterForm } from './forms/ReviewsFilterForm';

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

    return (
        <ExpansionPanel
            className={classes.root}
            expanded={expanded}
            onChange={() => setExpanded((prevState) => !prevState)}>
            <ExpansionPanelSummary
                expandIcon={<FilterListIcon />}
                aria-controls='panel1bh-content'>
                <Typography className={classes.heading}>Фильтры</Typography>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
                <ReviewsFilterForm />
            </ExpansionPanelDetails>
        </ExpansionPanel>
    );
};
