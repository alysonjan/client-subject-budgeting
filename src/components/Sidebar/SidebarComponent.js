import React from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import MenuIcon from '@mui/icons-material/Menu';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    link: {
        textDecoration: 'none',
        color: '#AE0000'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: 'none',
    },
    drawer: {
        width: '20%',
        flexShrink: 0,
        whiteSpace: 'nowrap',
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

export default function MiniDrawer() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const logout = () =>{
    // remove user from local storage to log user out
    // window.localStorage.clear();
    //window.localStorage.removeItem("token");
    }

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar
                position="fixed"
                className={clsx(classes.appBar, {
                    [classes.appBarShift]: open,
                })}
            >
                <Toolbar>
                    <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerOpen} edge="start" className={clsx(classes.menuButton, { [classes.hide]: open, })}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>Southwestern University-PHINMA</Typography>
                    <IconButton></IconButton>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                    [classes.drawerOpen]: open,
                    [classes.drawerClose]: !open,
                })}
                classes={{
                    paper: clsx({
                        [classes.drawerOpen]: open,
                        [classes.drawerClose]: !open,
                    }),
                }}
            >
                <div className={classes.toolbar}>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </div>
                <Divider />
                <List>
                    <Link to='/subject-budget' className={classes.link}>
                        <ListItem button key={'Subject-budget'}>
                            <ListItemIcon> <LibraryBooksIcon/> </ListItemIcon>
                            <ListItemText primary={'Subject-budget'} />
                        </ListItem>
                    </Link>


                    {/*
                    <Link to='/courses' className={classes.link}>
                        <ListItem button key={'Courses'}>
                            <ListItemIcon> <ImportContactsIcon/> </ListItemIcon>
                            <ListItemText primary={'Courses'} />
                        </ListItem>
                    </Link>

                    <Link to='/subjects' className={classes.link}>
                        <ListItem button key={'Subjects'}>
                            <ListItemIcon> <BookRoundedIcon/> </ListItemIcon>
                            <ListItemText primary={'Subjects'} />
                        </ListItem>
                    </Link>
                    
                    <Link to='/curriculum' className={classes.link}>
                        <ListItem button key={'Curriculum'}>
                            <ListItemIcon> <CardMembershipIcon/> </ListItemIcon>
                            <ListItemText primary={'Curriculum'} />
                        </ListItem>
                    </Link>

                    <Link to='/user-profile' className={classes.link}>
                        <ListItem button key={'User Profile'}>
                            <ListItemIcon> <AccountCircleIcon/> </ListItemIcon>
                            <ListItemText primary={'User Profile'} />
                        </ListItem>
                    </Link>

                    <Link to='/faculty-management' className={classes.link}>
                        <ListItem button key={'Faculty Management'}>
                            <ListItemIcon> <SupervisedUserCircleIcon/> </ListItemIcon>
                            <ListItemText primary={'Faculty Management'} />
                        </ListItem>
                    </Link>

                    */}

                    <Divider />
                    <Link to='/' className={classes.link}>
                        <ListItem button key={'Sign Out'} onClick={logout}>
                            <ListItemIcon> <ExitToAppIcon /> </ListItemIcon>
                            <ListItemText primary={'Sign Out'} />
                        </ListItem>
                    </Link> 

                </List>
            </Drawer>
        </div>
    );
}
