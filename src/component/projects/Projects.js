import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';


import { getProjects } from '../../api';
import Project from './Project';


const useStyles = makeStyles(theme => ({
    main: {
        color: '#ffffff'
    },
    navTitle: {
        backgroundColor: 'rgb(0,0,0,0.5)',
        paddingLeft: '1.2em',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '0em'
        }
    },
    gridItemAll: {
        marginTop: '2em',
        width:'100%'
    },

}));
 

export default function Projects() {
    const [projects, setProjects] = useState([])
    const classes = useStyles();
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

    useEffect(() => {
        getProjects().then(res => {
            let regexText = /project?/
            let newArrayOfProjects = res.data.filter(item => {
                return item.name.match(regexText)
            })
            setProjects(newArrayOfProjects)
        })
    }, [])

 console.log(projects)
    return (

        <Grid container direction='column' justify='center' className={classes.main}>
            <Grid item >
                <Typography variant='h4'
                    className={classes.navTitle}
                    align={matchesSm ? 'center' : undefined}>
                    Projects
                </Typography>
            </Grid>
            <Grid item>
                <Grid container justify='center'>
                    {projects.map((myPro, i) =>
                        <Grid item sm={12} md={4} className={classes.gridItemAll} key={i + "project"}>
                            <Project myPro={myPro} />
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>
    )
}