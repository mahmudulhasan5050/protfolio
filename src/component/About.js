import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItemText from '@material-ui/core/ListItemText';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Hidden from '@material-ui/core/Hidden';
import image from '../assets/myImage.png';


const useStyles = makeStyles(theme => ({
    mainGrid: {
        color: 'white',
        marginLeft: 'auto',

    },
    navTitle: {
        backgroundColor: 'rgb(0,0,0,0.5)',
        paddingLeft: '1.2em',
        [theme.breakpoints.down('sm')]: {
            paddingLeft: '0em'
        }
    },
    avatarBio: {
        marginTop: '4em'
    },
    avatar: {
        width: theme.spacing(40),
        height: theme.spacing(40)
    },
    divider: {
        minHeight: 'inherit',
        backgroundColor: theme.palette.common.green,
        width: '0.3em',
        borderRadius: '3em',
        margin: '0 2em 0 4em'
    },
    bio: {
        width: '60%',
        minHeight: 'inherit',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            marginTop: '2.5em'
        }
    },
    typographyTextBio: {
        marginTop: '1em'
    },
    infoBoxes: {
        marginTop: '4em',
        marginBottom: '0em'
    },
    gridCard: {
        width: '35%',
        [theme.breakpoints.down('sm')]: {
            width: '80%',
            marginBottom: '6em'
        }
    },
    card: {
        backgroundColor: 'rgb(0,0,0,0.1)',
        color: '#ffffff',
        padding: '3em 3em 0em 3em',
        height: '100%',
        [theme.breakpoints.down('sm')]: {
            width: '100%',
            padding: '3em 0em 0em 0em'
        }
    },
    titleCard: {
        color: theme.palette.common.green,
        fontWeight: 600
    },
    subTitleCard: {
        fontWeight: 400,
        fontSize: '1.2em'
    },
    list: {
        marginLeft: '1em'
    },
    listTitle: {
        color: theme.palette.common.green
    }
}))

const typographyForBio = [
    'This is S M Mahmudul Hasan. A software development' +
    ' enthusiast and guitar lover.',

    'At present seeking a place as a full stack developer' +
    ' in any suitable company where I' +
    ' can show my skill and dedication to flourish my career.',

    'Coding is my passion and love to learn new technologies, believe' +
    ' in team work and like to take new challenges. My excellent communication skill and' +
    ' team oriented attitude could be helpful of a development team.',

    'I am sincerely looking forward for new opportunities in the' +
    ' field of Software Engineering and Software Development as a Trainee,' +
    ' Full Stack Developer and Software Developer. I am prepared' +
    ' and excited about the opportunities and challenges' +
    ' waiting for me in the future. I also believe that I have the required' +
    ' potential, motivation and skills.'

];

const eduSkillInfo = [
    {
        id: '1',
        title: 'EDUCATION',
        text1: 'Bachelor of Engineering, Information Technology, 2012-2018.',
        text2: 'Centria University of Applied Sciences, Kokkola',
        listTitle: 'Major Courses',
        list: [
            'Object-Oriented Programming',
            'C Programming Language',
            'C++ Programming Language',
            'WWW-Programming',
            'Relational Database & SQL',
            'IP-Networks',
            'Cisco Networking (CCNA1, CCNA2)',
            'Java Advanced Programming',
            'Algorithms and Data Structures',
            'Software Engineering',
            'Digital Techniques',
            'Embedded Systems'
        ]
    },
    {
        id: '2',
        title: 'SKILLS & COMPETENCE',
        text1: 'Agile Methodologes.',
        text2: 'Version Control: Git & Github.',
        listTitle: 'Skills',
        list: [
            'HTML5',
            'CSS3',
            'JavaScript ECMA6',
            'React',
            'NodeJs',
            'C#',
            'Axios',
            'Express',
            'MySQL Database',
            'RESTful API',
            'Bootstrap framework',
            'Responsive Design',
            'AdobeXD'
        ]
    }
]

const About = () => {
    const classes = useStyles();
    const theme = useTheme();
    const matchesSm = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Grid container direction='column' justify='center' className={classes.mainGrid}>
            <Grid item>
                <Typography variant='h4'
                    className={classes.navTitle}
                    align={matchesSm ? 'center' : undefined}>
                    About Me
                </Typography>
            </Grid>

            <Grid item >
                <Grid container
                    direction={matchesSm ? 'column' : 'row'}
                    justify='center'
                    alignItems={matchesSm ? 'center' : undefined}
                    className={classes.avatarBio}>
                    <Grid item >
                        <Avatar alt='My Photo' src={image} className={classes.avatar} />
                    </Grid>
                    <Hidden smDown>
                        <Grid item >
                            <Divider orientation='vertical' className={classes.divider} />
                        </Grid>
                    </Hidden>
                    <Grid item className={classes.bio}>
                        <Typography variant='h5' align={matchesSm ? 'center' : undefined}>BIO</Typography>
                        {typographyForBio.map((textItem, i) =>
                            <Typography className={classes.typographyTextBio}
                                key={i+"bio"}
                                align={matchesSm ? 'center' : undefined}>
                                {textItem}
                            </Typography>
                        )}
                    </Grid>
                </Grid>
            </Grid>

            <Grid item>
                <Grid container direction={matchesSm ? 'column' : 'row'}
                    justify='space-around'
                    alignItems={matchesSm ? 'center': undefined}
                    className={classes.infoBoxes}>
                    {eduSkillInfo.map((item, i) =>
                        <Grid item className={classes.gridCard} key={i+"grid"}>
                            <Card className={classes.card}>
                                <Typography variant='h5'
                                    className={classes.titleCard}
         
                                    

                                    align={matchesSm ? 'center' : undefined}>
                                    {item.title}
                                </Typography>
                                <Grid container
                                    direction='column'
                                    alignItems={matchesSm ? 'center' : 'flex-start'}>
                                    <Grid item>
                                        <Typography className={classes.subTitleCard}
                                 
                                            align={matchesSm ? 'center' : undefined}>
                                            {item.text1}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography align={matchesSm ? 'center' : undefined}>
                                            {item.text2}
                                        </Typography>
                                    </Grid>
                                    <Grid item>
                                        <Typography className={classes.listTitle}>
                                            {item.listTitle}
                                        </Typography>
                                    </Grid>
                                    <Grid item className={classes.list}>
                                        {item.list.map((element, i) =>
                                            <List key={"eachElement"+i}>
                                                <ListItemText>{element}</ListItemText>
                                            </List>
                                        )}
                                    </Grid>
                                </Grid>
                            </Card>
                        </Grid>
                    )}
                </Grid>

            </Grid>

        </Grid>


    )

}
export default About;