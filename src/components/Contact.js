import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import HomeIcon from '@material-ui/icons/Home';
import EmailIcon from '@material-ui/icons/Email';
import PhoneIcon from '@material-ui/icons/Phone';
import Paper from '@material-ui/core/Paper';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles(theme => ({
    root: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        marginBottom: "none",
        width: "60%",
        backgroundColor: "#424242",
        padding: theme.spacing(3),
        color: "white",
        flexDirection: "column",
        marginBottom: "3rem",
    }
}))

export default function Contact() {
    const classes = useStyles();
    return (
        <Box fontFamily="Monospace" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
            <Typography variant="h3" gutterBottom style={{ color: "white" }}>
                Contact Me
            </Typography>
            <Paper elevation={3} className={classes.root}>
                <Box style={{display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
                    <HomeIcon style={{ fontSize: "3rem", marginRight: "0.5rem" }} />
                    <Typography variant="h6">
                        Address:
                    </Typography>
                    <Typography style={{ display: "inline", marginLeft: "3rem" }}>
                        Minh Khai, Hai Ba Trung, Ha Noi, Vietnam
                    </Typography>
                </Box>

                <Box style={{display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
                    <EmailIcon style={{ fontSize: "3rem", marginRight: "0.5rem" }} />
                    <Typography variant="h6">
                        Email:
                    </Typography>
                    <Typography style={{ display: "inline", marginLeft: "5rem" }}>
                        nvhai245@gmail.com
                    </Typography>
                </Box>

                <Box style={{display: "flex", alignItems: "center", justifyContent: "flex-start"}}>
                    <PhoneIcon style={{ fontSize: "3rem", marginRight: "0.5rem" }} />
                    <Typography variant="h6">
                        Phone:
                    </Typography>
                    <Typography style={{ display: "inline", marginLeft: "5rem" }}>
                        0374 116 741
                    </Typography>
                </Box>
                <Box style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "1rem auto"}}>
                    <IconButton onClick={() => window.open('https://github.com/nvhai245', '_blank')}>
                        <GitHubIcon style={{fontSize: "4rem"}} />
                    </IconButton>
                    <IconButton onClick={() => window.open('https://www.facebook.com/nvhai245', '_blank')}>
                        <FacebookIcon style={{fontSize: "4rem"}} />
                    </IconButton>
                    <IconButton onClick={() => window.open('https://www.instagram.com/nvhai245/', '_blank')}>
                        <InstagramIcon style={{fontSize: "4rem"}} />
                    </IconButton>
                    <IconButton onClick={() => window.open('https://github.com/nvhai245', '_blank')}>
                        <LinkedInIcon style={{fontSize: "4rem"}} />
                    </IconButton>
                    <IconButton onClick={() => window.open('https://twitter.com/Hari__N', '_blank')}>
                        <TwitterIcon style={{fontSize: "4rem"}} />
                    </IconButton>
                </Box>
            </Paper>
        </Box>
    )
}
