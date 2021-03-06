import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import VisibilityIcon from '@material-ui/icons/Visibility';

import imageMovieRating from '../assets/movie_rating.PNG';
import imagePortfolio from '../assets/portfolio.PNG';
import imageTimeCounter from '../assets/time_counter.PNG';
import imageKeyboard from '../assets/keyboard.PNG';
import imageLocalStorage from '../assets/localStorage.PNG';
import imageTodo from '../assets/todo.PNG';
import explore from '../assets/explore.PNG';



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
        marginTop: '3em'
    },
    card: {
        backgroundColor: 'rgb(0,0,0,0.1)',
        color: '#ffffff',
        margin: '1em 1em 0em 1em',
        minHeight:380
    },
    media: {
        height: 200,
        width: 170,
        margin: 'auto'
    },
    icons: {
        color: '#ffffff'
    }
}));

const myProjects = [
    {
        image: explore,
        name: 'Memory Sharing Site',
        description: 'This site is a platform to share good memories.'+
         ' In this project MERN stack has been used.',
        gitLink: 'https://github.com/mahmudulhasan5050/mernexplore',
        link: 'https://amazing-curran-f63f52.netlify.app'
    },
    {
        image: imageMovieRating,
        name: 'Movie Rating',
        description: 'This application is made to review and rate movies.'+
         ' In this project, React, Express and MySql have been used.',
        gitLink: 'https://github.com/mahmudulhasan5050/movie_rating',
        link: 'https://youthful-ritchie-1dc87e.netlify.app/'
    },
    {
        image: imageKeyboard,
        name: 'Keyboard Game',
        description: 'When user presses right letter, letter will disappear from the screen.'+
         ' JavaScript has been used in this project.',
        gitLink: 'https://github.com/mahmudulhasan5050/javascript_keyboard',
        link: 'https://sleepy-raman-12f4f1.netlify.app/'
    },
    {
        image: imageLocalStorage,
        name: 'LocalStorage',
        description: 'In this project, local storage has been used to save data.'+
         ' JavaScript has been used in this project.',
        gitLink: 'https://github.com/mahmudulhasan5050/javascript_data_localstorage',
        link: 'https://competent-elion-6af5b0.netlify.app/'
    },
    {
        image: imageTodo,
        name: 'Todo List',
        description: 'This project is a todo list application (with TypeScript). It is possible to create own daily'+
        ' small tasks list, mark as completed and possible to sort done and undone tasks.',
        gitLink: 'https://github.com/mahmudulhasan5050/todo',
        link: 'https://heuristic-liskov-d4c09d.netlify.app/'
    },
    {
        image: imagePortfolio,
        name: 'My Portfolio',
        description: 'This project is my own portfolio. I have used Material UI'+
        ' for designing. This site is mobile responsive.',
        gitLink: 'https://github.com/mahmudulhasan5050/protfolio',
        link: 'https://heuristic-mahavira-b84f4a.netlify.app/'
    },
    {
        image: imageTimeCounter,
        name: 'Time Counter',
        description: 'This project is to calculate how much time left from the desired date.',
        gitLink: 'https://github.com/mahmudulhasan5050/count_down_timer',
        link: 'https://laughing-northcutt-22ec3c.netlify.app/'
    }
]

export default function Projects() {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

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
                    {myProjects.map((myPro, i) =>
                        <Grid item sm={12} md={4} className={classes.gridItemAll} key={i+"project"}>
                            <Card className={classes.card}>
                                <CardMedia
                                    component="img"
                                    alt={myPro.title}
                                    className={classes.media}
                                    height="140"
                                    image={myPro.image}
                                />
                                <CardContent>
                                    <Typography gutterBottom
                                        variant="h5"
                                        component="h2"
                                        align={matchesSm ? 'center' : undefined}>
                                        {myPro.name}
                                    </Typography>
                                    <Typography variant="body2"
                                        component="p"
                                        align={matchesSm ? 'center' : undefined}>
                                        {myPro.description}
                                    </Typography>
                                </CardContent>

                                <CardActions>
                                    <Button size="small">
                                        <a href={myPro.gitLink} alt='git link' target='_blank'>
                                            <GitHubIcon className={classes.icons} />
                                        </a>
                                    </Button>
                                    <Button size="small">
                                        <a href={myPro.link} alt='view link' target='_blank'>
                                            <VisibilityIcon className={classes.icons} />
                                        </a>
                                    </Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )}
                </Grid>
            </Grid>
        </Grid>
    )
}