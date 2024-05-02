import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
//import VisibilityIcon from '@material-ui/icons/Visibility';
//import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VideocamIcon from '@material-ui/icons/Videocam';
import VideoPopup from './VideoPopup';




const useStyles = makeStyles(theme => ({
    card: {
        backgroundColor: 'rgb(0,0,0,0.1)',
        color: '#ffffff',
        margin: '1em 1em 0em 1em',
        minHeight: 450,
    },
    media: {
        height: 200,
        width: 200,
        margin: 'auto'
    },
    icons: {
        color: '#ffffff'
    }
}));

const Project = ({ myPro }) => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
    };


    return (
        <Card className={classes.card}>
            <CardMedia
                component="img"
                alt={myPro.type}
                className={classes.media}

                image={myPro.image}
                sx={{ width: "200px" }}
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
                    Features: {myPro.features}
                </Typography>
                <Typography variant="body2"
                    component="p"
                    align={matchesSm ? 'center' : undefined}>
                    Technologies: {myPro.technology}
                </Typography>
            </CardContent>

            <CardActions>
                <Button size="small">
                    <a href={myPro.gitLink} alt='git link' target='_blank' rel='noopener noreferrer'>
                        <GitHubIcon className={classes.icons} />
                    </a>
                </Button>

                {/* This button is for future use*/}
                {/* <Button size="small">
                    {myPro.link ?
                        (<a href={myPro.link} alt='view link' target='_blank' rel='noopener noreferrer'>
                            <VisibilityIcon className={classes.icons} />
                        </a>)
                        : (<VisibilityOffIcon className={classes.icons} />)}

                </Button> */}
                {myPro.videoUrl !== "" ? <Button onClick={openPopup}><VideocamIcon className={classes.icons} /></Button> : undefined}
                
                <div>
                    {isPopupOpen && (
                        <VideoPopup
                            videoUrl={myPro.videoUrl}
                            onClose={closePopup}
                        />
                    )}
                </div>
            </CardActions>
        </Card>
    )
}

export default Project