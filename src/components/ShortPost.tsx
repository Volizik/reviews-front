import React, { FC } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Hidden from '@material-ui/core/Hidden';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    card: {
        display: 'flex',
    },
    cardDetails: {
        flex: 1,
    },
    cardMedia: {
        width: 160,
    },
});

export type ShortPostProps = {
    id: number;
    title: string;
    date: string;
    description: string;
    image: string;
};

export const ShortPost: FC<ShortPostProps> = (props) => {
    const classes = useStyles();
    const { title, date, description, image, id } = props;

    return (
        <Grid item xs={12}>
            <Link to={`/review/${id}`} style={{ textDecoration: 'none' }}>
                <CardActionArea>
                    <Card className={classes.card}>
                        <div className={classes.cardDetails}>
                            <CardContent>
                                <Typography component='h2' variant='h5'>
                                    {title}
                                </Typography>
                                <Typography
                                    variant='subtitle1'
                                    color='textSecondary'>
                                    {date}
                                </Typography>
                                <Typography variant='subtitle1' paragraph>
                                    {description}
                                </Typography>
                            </CardContent>
                        </div>
                        <Hidden xsDown>
                            <CardMedia
                                className={classes.cardMedia}
                                image={image}
                                title={title}
                            />
                        </Hidden>
                    </Card>
                </CardActionArea>
            </Link>
            <br />
        </Grid>
    );
};
