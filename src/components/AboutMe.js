import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(3),
        },
        alignItems: 'center',
        justifyContent: 'center',
    },
    huge: {
        width: theme.spacing(45),
        height: theme.spacing(45),
    },
    introduction: {
        maxWidth: "40%",
    }
}));

export default function AboutMe() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Avatar
                alt="Hari N"
                src="https://scontent.fhan2-3.fna.fbcdn.net/v/t1.0-9/p960x960/82612994_853187251768413_6789819364800462848_o.jpg?_nc_cat=102&_nc_ohc=0GozKCxKQuAAX8IlYWV&_nc_ht=scontent.fhan2-3.fna&_nc_tp=6&oh=84815c50e7cf1137a1abd1f472cc0918&oe=5EDC26A3"
                className={classes.huge}
            />
            <Box className={classes.introduction}>
            <Typography style={{ fontFamily: `'Sigmar One', cursive`, color: "white" }} variant="h3" gutterBottom>
                HAI NGUYEN
            </Typography>
            <Typography style={{ fontFamily: `'Sigmar One', cursive`, color: "white" }} variant="h4" gutterBottom>
                Fullstack
                    <br />
                Web Developer
            </Typography>
            <Typography component="div" style={{ color: "white" }}>
                <Box fontFamily="Monospace" fontSize="h6.fontSize" m={1}>
                    My name is Hai Nguyen. I am a Fullstack Website Developer, specializing in web, desktop, mobile design and development.
                    I always maintain a healthy balance between functionality and visual impact in all of my works.
                </Box>
            </Typography>
            </Box>
        </div>
    )
}
