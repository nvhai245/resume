import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import VisibilityIcon from '@material-ui/icons/Visibility';
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import {IconButton} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        '& > *': {
            margin: theme.spacing(3),
        },
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: "wrap",
    },
    huge: {
        width: theme.spacing(45),
        height: theme.spacing(45),
    },
    introduction: {
        maxWidth: "57%",
    }
}));

export default function AboutMe() {
    const classes = useStyles();
    const [reveal, setReveal] = useState(false)
    const handleReveal = () => {
        setReveal(prevState => !prevState)
    }
    return (
        <div className={classes.root}>
            <Avatar
                alt="Hari N"
                src="https://storage.googleapis.com/fresh-meme/74938769_785028741917598_4324800448075661312_o.jpg"
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
                        My name is Hai Nguyen. I am a Back-end/Fullstack Website Developer, specializing APIs design and microservices development.
                        I always maintain a healthy balance between functionality and visual impact in all of my works.
                    <br />
                    <ul>
                        <li>
                            Facebook: <a style={{color: "white"}} href="https://www.facebook.com/nvhai245" target="_blank">/nvhai245</a>
                        </li>
                        <li>
                            Phone number: <strong>{reveal ? "0374116741" : "*******741"}</strong><IconButton style={{color: "white"}} onClick={handleReveal}>{
                                reveal ? <VisibilityIcon /> : <VisibilityOffIcon />
                        }</IconButton>
                        </li>
                    </ul>
                </Box>
            </Typography>
            </Box>
        </div>
    )
}
