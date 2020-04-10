import React, {FC, useState} from 'react';
import StyledRating, { IconContainerProps } from '@material-ui/lab/Rating';
import SentimentVeryDissatisfiedIcon from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentDissatisfiedIcon from '@material-ui/icons/SentimentDissatisfied';
import SentimentSatisfiedIcon from '@material-ui/icons/SentimentSatisfied';
import SentimentSatisfiedAltIcon from '@material-ui/icons/SentimentSatisfiedAltOutlined';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from "@material-ui/core/Grid";

const customIcons: { [index: string]: { icon: React.ReactElement; label: string } } = {
    1: {
        icon: <SentimentVeryDissatisfiedIcon />,
        label: 'Очень недоволен',
    },
    2: {
        icon: <SentimentDissatisfiedIcon />,
        label: 'Недоволен',
    },
    3: {
        icon: <SentimentSatisfiedIcon />,
        label: 'Нейтральный',
    },
    4: {
        icon: <SentimentSatisfiedAltIcon />,
        label: 'Доволен',
    },
    5: {
        icon: <SentimentVerySatisfiedIcon />,
        label: 'Очень доволен',
    },
};

function IconContainer(props: IconContainerProps) {
    const { value, ...other } = props;
    return <span {...other}>{customIcons[value].icon}</span>;
}

export interface RatingProps {
    title?: string;
    initialValue?: number;
    readOnly?: boolean;
    showTextValue?: boolean;
}

export const Rating: FC<RatingProps> = ({title, initialValue = 1, readOnly = false, showTextValue = false}) => {
    const [ value, setValue ] = useState(initialValue);
    const [ hover, setHover ] = useState(value);


    return (
        <Box component="fieldset" borderColor="transparent">
            {title && <Typography component="legend">{title}</Typography>}
            <Grid container item xs={12}>
                <StyledRating
                    size='large'
                    name="rating"
                    defaultValue={value}
                    getLabelText={(value: number) => customIcons[value].label}
                    IconContainerComponent={IconContainer}
                    readOnly={readOnly}
                    onChange={(event, newValue) => {
                        setValue(newValue || 1);
                    }}
                    onChangeActive={(event, newHover) => {
                        setHover(newHover || 1);
                    }}
                />
                {value !== null && showTextValue && <Box ml={2}>{customIcons[hover !== -1 ? hover : value].label}</Box>}
            </Grid>

        </Box>
    );
}
