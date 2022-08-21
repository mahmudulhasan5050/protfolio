import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({
    main: {
        color: 'white',
        marginTop: '18em',
        [theme.breakpoints.down('md')]: {
            marginTop: '9em'
        }
    },
    name: {
        marginLeft: '3em',
        [theme.breakpoints.down('sm')]: {
            marginLeft: '0em'
        }

    },
    textOne: {
        fontSize: '2.9em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.7em',

        }
    },
    textTwo: {
        fontSize: '1.9em',
        [theme.breakpoints.down('sm')]: {
            fontSize: '1.2em'
        }

    },
    contact: {
        margin: '4em 0em 1em 0em'
    },
    textcontact: {
        margin: '0em 3em 0em 0em',
        [theme.breakpoints.down('sm')]: {
            margin: '0em 3em 0em 1em'
        }
    }
}))


const Home = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container direction='column'

            className={classes.main}
            alignItems={matchesSm ? 'center' : 'flex-start'}>
            <Grid item className={classes.name}>
                <Typography className={classes.textOne}>
                    S M Mahmudul Hasan
                </Typography>
            </Grid>
            <Grid item className={classes.name}>
                <Typography className={classes.textTwo}>
                    Full Stack Developer, Software Engineer
                </Typography>
            </Grid>
            <Grid item className={classes.name}>
                <Typography className={classes.textTwo}>
                    AWS Certified Cloud Practitioner
                </Typography>
            </Grid>
            <Grid item container direction='column' alignItems={matchesSm ? 'center' : 'flex-end'} className={classes.contact}>
                <Grid item>
                    <Typography variant='subtitle1' className={classes.textcontact}>
                        Contact
                        </Typography>
                </Grid>
                <Grid item >
                    <Typography variant='subtitle1' className={classes.textcontact}>
                        Email: mahmudul.rony@outlook.com
                        </Typography>
                </Grid>
                <Grid item>
                    <Typography variant='subtitle1' className={classes.textcontact}>
                        Phone Number: +358451899234
                        </Typography>
                </Grid>
            </Grid>
        </Grid>

    )

}
export default Home;