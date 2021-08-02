import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import GitHubIcon from '@material-ui/icons/GitHub';
//import LinkedInIcon from '@material-ui/icons/LinkedIn';

const useStyles = makeStyles(theme => ({
    footer: {
        width: '100%',
        backgroundColor: '#333333',
        marginTop:'4.3em',
zIndex: 1302
    },
    mainContainer: {

    },
iconGrid:{
    marginRight:'3em',
    [theme.breakpoints.down('sm')]: {
        margin:'0em'
    }
},
    icons: {
        color: '#ffffff',
        fontSize: '2.5em',
        marginRight:'0.5em',
        marginBottom:'0.5em',
    }
}))
export default function Footer() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));
    return (
        <footer className={classes.footer}>
            <Grid container justify={matchesSm ? 'center':'flex-end'} className={classes.mainContainer}>
                <Grid item className={classes.iconGrid}>
                   <a href='https://github.com/mahmudulhasan5050' alt='github'> <GitHubIcon className={classes.icons} /></a>
                    {/*<LinkedInIcon className={classes.icons} />*/}
                </Grid>
            </Grid>

        </footer>
    )
}