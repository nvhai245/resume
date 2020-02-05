import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import LevelSlider from './LevelSlider';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
    },
    inline: {
        display: 'inline',
    },
}));

export default function Skills() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Box style={{width: "100%"}} fontFamily="Monospace" m={1}>
                <Typography variant="h3" gutterBottom style={{textAlign: "center"}}>
                    My Skills
                </Typography>
                <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
                <Box style={{display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap"}}>
                <Box style={{width: "40%", minWidth: "400px", marginLeft: "3%"}}>
                <Typography variant="h5" gutterBottom style={{textAlign: "center"}}>
                    Front-end
                </Typography>
                <List className={classes.root}>
                    <ListItem className={classes.skillInfo} alignItems="center">
                        <i className="devicon-javascript-plain colored" style={{fontSize: "3rem", marginRight: "1rem"}} />
                        <ListItemText
                            primary="Javascript"
                            secondary={
                                    <LevelSlider level={90} color="#F0DB4F" />
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" light />
                    <ListItem className={classes.skillInfo} alignItems="center">
                        <i className="devicon-html5-plain colored" style={{fontSize: "3rem", marginRight: "1rem"}} />
                        <ListItemText
                            primary="HTML/CSS"
                            secondary={
                                    <LevelSlider level={100} color="#E54D26" />
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" light />
                    <ListItem className={classes.skillInfo} alignItems="center">
                        <i className="devicon-react-original colored" style={{fontSize: "3rem", marginRight: "1rem"}} />
                        <ListItemText
                            primary="Reactjs"
                            secondary={
                                    <LevelSlider level={90} color="#61DAFB" />
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" light />
                    <ListItem className={classes.skillInfo} alignItems="center">
                        <i className="devicon-bootstrap-plain colored" style={{fontSize: "3rem", marginRight: "1rem"}} />
                        <ListItemText
                            primary="Bootstrap"
                            secondary={
                                    <LevelSlider level={90} color="#59407F" />
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" light />
                    <ListItem className={classes.skillInfo} alignItems="center">
                        <i className="devicon-vuejs-plain colored" style={{fontSize: "3rem", marginRight: "1rem"}} />
                        <ListItemText
                            primary="Vuejs"
                            secondary={
                                    <LevelSlider level={40} color="#41B883" />
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" light />
                </List>
                </Box>
                <Box style={{width: "40%", minWidth: "400px", marginRight: "3%"}}>
                <Typography variant="h5" gutterBottom style={{textAlign: "center"}}>
                    Back-end
                </Typography>
                <List className={classes.root}>
                <ListItem className={classes.skillInfo} alignItems="center">
                        <i className="devicon-nodejs-plain colored" style={{fontSize: "3rem", marginRight: "1rem"}} />
                        <ListItemText
                            primary="Nodejs"
                            secondary={
                                    <LevelSlider level={90} color="#83CD29" />
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" light />
                    <ListItem className={classes.skillInfo} alignItems="center">
                        <i className="devicon-go-plain" style={{fontSize: "3rem", marginRight: "1rem", color: "#75CEDE"}} />
                        <ListItemText
                            primary="Golang"
                            secondary={
                                    <LevelSlider level={70} color="#75CEDE" />
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" light />
                    <ListItem className={classes.skillInfo} alignItems="center">
                        <i className="devicon-docker-plain colored" style={{fontSize: "3rem", marginRight: "1rem"}} />
                        <ListItemText
                            primary="Docker"
                            secondary={
                                    <LevelSlider level={60} color="#019BC6" />
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" light />
                    <ListItem className={classes.skillInfo} alignItems="center">
                        <i className="devicon-python-plain colored" style={{fontSize: "3rem", marginRight: "1rem"}} />
                        <ListItemText
                            primary="Python"
                            secondary={
                                    <LevelSlider level={70} color="#FFD845" />
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" light />
                    <ListItem className={classes.skillInfo} alignItems="center">
                        <i className="devicon-mongodb-plain colored" style={{fontSize: "3rem", marginRight: "1rem"}} />
                        <ListItemText
                            primary="MongoDB"
                            secondary={
                                    <LevelSlider level={90} color="#4FAA41" />
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" light />
                    <ListItem className={classes.skillInfo} alignItems="center">
                        <i className="devicon-postgresql-plain colored" style={{fontSize: "3rem", marginRight: "1rem"}} />
                        <ListItemText
                            primary="PostgreSQL"
                            secondary={
                                    <LevelSlider level={70} color="#336791" />
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" light />
                </List>
                </Box>
                </Box>
                </ScrollAnimation>
                
            </Box>
        </div>
    )
}
