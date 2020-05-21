import React, { FC, ReactElement } from 'react';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AddIcon from '@material-ui/icons/Add';
import MapIcon from '@material-ui/icons/Map';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) =>
    createStyles({
        list: {
            width: 250,
        },
        fullList: {
            width: 'auto',
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
    }),
);

export interface MenuListItem {
    name: string;
    icon: ReactElement;
    link: string;
}

export const menuList: MenuListItem[] = [
    {
        name: 'Добавить отзыв',
        icon: <AddIcon />,
        link: '/review/add',
    },
    {
        name: 'Мои отзывы',
        icon: <MapIcon />,
        link: '/review/my',
    },
];

export const Menu: FC = () => {
    const classes = useStyles();
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event &&
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState(open);
    };

    const list = () => (
        <div
            className={classes.list}
            role='presentation'
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}>
            <List>
                {menuList.map((menuItem) => (
                    <Link
                        to={menuItem.link}
                        style={{ textDecoration: 'none', color: '#000' }}
                        key={menuItem.link}>
                        <ListItem button>
                            <ListItemIcon>{menuItem.icon}</ListItemIcon>
                            <ListItemText primary={menuItem.name} />
                        </ListItem>
                    </Link>
                ))}
            </List>
            {/*<Divider />*/}
            {/*<List>*/}
            {/*    {['All mail', 'Trash', 'Spam'].map((text, index) => (*/}
            {/*        <ListItem button key={text}>*/}
            {/*            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>*/}
            {/*            <ListItemText primary={text} />*/}
            {/*        </ListItem>*/}
            {/*    ))}*/}
            {/*</List>*/}
        </div>
    );

    return (
        <div>
            <IconButton
                edge='start'
                className={classes.menuButton}
                color='inherit'
                aria-label='menu'
                onClick={toggleDrawer(true)}>
                <MenuIcon />
            </IconButton>
            <SwipeableDrawer
                anchor='left'
                open={state}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}>
                {list()}
            </SwipeableDrawer>
        </div>
    );
};
