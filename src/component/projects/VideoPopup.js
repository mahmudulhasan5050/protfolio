import React, { useState } from 'react';
import ReactPlayer from 'react-player';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    videoPopup: {
        position: 'fixed',
        top: 40,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'rgba(0, 0, 0, 0.9)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },

    videoPopupContent: {
        position: 'relative',
        maxWidth: '800px',
        maxHeight: '600px',
        width: '80%',
        height: '60%',
        background: 'black',
        borderRadius: '10px',
        overflow: 'hidden',
    },

    closeBtn: {
        position: 'relative',
        top: '10px',
        right: '10px',
        left: '10px',
        marginBottom: '10px',
        fontSize: '24px',
        color: 'red',
        background: 'transparent'
        
    }
}));

const VideoPopup = ({ videoUrl, onClose }) => {
    const classes = useStyles();
    const theme = useTheme();
    const [isPlaying, setIsPlaying] = useState(true);

    const handleVideoEnded = () => {
        // Optional: You can add logic here for what happens when the video ends
        console.log('Video ended');
        onClose();
    };

    const handleClose = () => {
        console.log("click");

            setIsPlaying(false);
            // Additional logic if needed
            onClose();


    }
    return (
        <div className={classes.videoPopup}>
            <div className={classes.videoPopupContent}>
            <button className={classes.closeBtn} onClick={handleClose}>
            &#x2715;
            </button>
                <ReactPlayer
                    url={videoUrl}
                    playing={isPlaying}
                    controls
                    width="100%"
                    height="100%"
                    onEnded={handleVideoEnded}
                />
            </div>
        </div>
    );
};

export default VideoPopup;