import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import { List, ListItem, ListItemText } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: '5em'
    },
    appBar: {
        width: '100%',
        backgroundColor: '#333333'
    },
    toolbarWrapper: {
        margin: '0 3em 0 3em',
        [theme.breakpoints.down('sm')]: {
            margin: '0 1em 0 1em'
        }
    },
    appbarTitle: {
        fontSize: '2.5em',
        fontFamily: 'Pacifico',
        height: '2em',
        [theme.breakpoints.down('md')]: {
            fontSize: '2em'
        },
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.5em'
        }
    },
    drawer: {
        backgroundColor: 'rgb(0,0,0,0.5)',
        color: '#ffffff'
    },
    drawerIconContainer: {
        color: theme.palette.common.green,
        marginLeft: 'auto'
    },
    drawerIcon: {
        width: '30px',
        height: '30px'
    },
    listText: {
        paddingTop: '20px',
        paddingLeft: '60px',
        fontFamily: 'Montserrat'

    },
    selected: {
        color: theme.palette.common.green
    },
    mySpan: {
        color: theme.palette.common.green
    },
    tabContainer: {
        marginLeft: 'auto',
    },
    tab: {
        fontFamily: 'Montserrat',
        fontWeight: '600',
        fontSize: '1.1rem'
    },
    menuIcon: {
        color: '#ffffff',
        fontSize: '2.5rem'
    }
}))


export default function Header(props) {
    const classes = useStyles();
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);
    const [value, setValue] = useState(0);
    const [openDrawer, setOpenDrawer] = useState(false);

    const handleChangeTab = (e, newValue) => {
        setValue(newValue);
    }

    useEffect(() => {
        if (window.location.pathname === "/" && value !== 0) { setValue(0) }
        if (window.location.pathname === "/about" && value !== 1) { setValue(1) }
        if (window.location.pathname === "/projects" && value !== 2) { setValue(2) }
    }, [value]);

    const tabs = (
        <React.Fragment>
            <Tabs value={value}
                onChange={handleChangeTab}
                className={classes.tabContainer}
                TabIndicatorProps={{ style: { background: "#5aff3d" } }}>

                <Tab className={classes.tab}
                    component={Link}
                    to="/"
                    label="Home" />
                <Tab className={classes.tab}
                    component={Link}
                    to="/about"
                    label="About" />
                <Tab className={classes.tab}
                    component={Link}
                    to="/projects"
                    label="Projects" />
            </Tabs>
        </React.Fragment>
    );

    const drawer = (
        <React.Fragment>
            <SwipeableDrawer disableBackdropTransition={!iOS} disableDiscovery={iOS}
                open={openDrawer}
                onClose={() => setOpenDrawer(false)}
                onOpen={() => setOpenDrawer(true)}
                classes={{ paper: classes.drawer }}>
                <div className={classes.toolbarMargin}></div>
                <List>
                    <ListItem onClick={() => { setOpenDrawer(false); setValue(0) }}
                        divider button
                        component={Link} to='/'
                        selected={value === 0}
                        classes={{ selected: classes.selected }}>
                        <ListItemText className={classes.listText}>Home</ListItemText>
                    </ListItem>
                    <ListItem onClick={() => { setOpenDrawer(false); setValue(1) }}
                        divider button
                        component={Link} to='/about'
                        selected={value === 1}
                        classes={{ selected: classes.selected }}>
                        <ListItemText className={classes.listText}>About</ListItemText>
                    </ListItem>
                    <ListItem onClick={() => { setOpenDrawer(false); setValue(2) }}
                        divider button
                        component={Link} to='/projects'
                        selected={value === 2}
                        classes={{ selected: classes.selected }}>
                        <ListItemText className={classes.listText}>Projects</ListItemText>
                    </ListItem>
                </List>
            </SwipeableDrawer>
            <IconButton onClick={() => setOpenDrawer(!openDrawer)} className={classes.drawerIconContainer} >
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment>
    );
    return (
        <React.Fragment>
            <AppBar position='fixed' elevation={0} className={classes.appBar}>
                <Toolbar disableGutters className={classes.toolbarWrapper}>
                    <h1 className={classes.appbarTitle}>
                        My <span className={classes.mySpan}>Portfolio</span>
                    </h1>
                    {matches ? drawer : tabs}
                </Toolbar>
            </AppBar>
            <div className={classes.toolbarMargin}></div>
        </React.Fragment>
    );
}