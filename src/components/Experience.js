import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ScrollAnimation from 'react-animate-on-scroll';
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import AlarmIcon from '@material-ui/icons/Alarm';
import HourglassFullIcon from '@material-ui/icons/HourglassFull';
import RecordVoiceOverIcon from '@material-ui/icons/RecordVoiceOver';
import GroupIcon from '@material-ui/icons/Group';
import CodeIcon from '@material-ui/icons/Code';
import WebIcon from '@material-ui/icons/Web';
import PowerIcon from '@material-ui/icons/Power';
import DescriptionIcon from '@material-ui/icons/Description';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';

const useStyles = makeStyles(theme => ({
    root: {
        width: '70%',
        backgroundColor: "none",
        color: 'white',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
    },
}));

export default function Experience() {
    const classes = useStyles();
    return (
        <div>
            <Box fontFamily="Monospace" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <Typography variant="h3" gutterBottom style={{ color: "white" }}>
                    Work Experience
                </Typography>
                <Box style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column", width: "70%" }}>
                    <ScrollAnimation style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column" }} animateIn='bounceInRight' animateOnce={true}>
                        <Typography variant="h5" gutterBottom style={{ color: "white" }}>
                            Things I have developed during academic years:
                        </Typography>
                        <List component="nav" className={classes.root} aria-label="exprience">
                            <ListItem button>
                                <ListItemIcon>
                                    <SentimentVerySatisfiedIcon style={{ color: "#61DAFB", fontSize: "3rem", marginRight: "1rem" }} />
                                </ListItemIcon>
                                <ListItemText primary="Attitude – a positive, hardworking, and likable personality" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <AlarmIcon style={{ color: "#61DAFB", fontSize: "3rem", marginRight: "1.5rem" }} />
                                </ListItemIcon>
                                <ListItemText primary="Time Management Skill" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <HourglassFullIcon style={{ color: "#61DAFB", fontSize: "3rem", marginRight: "1.5rem" }} />
                                </ListItemIcon>
                                <ListItemText primary="Aptitude to get up to speed quickly on the job for a deadline" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <RecordVoiceOverIcon style={{ color: "#61DAFB", fontSize: "3rem", marginRight: "1.5rem" }} />
                                </ListItemIcon>
                                <ListItemText primary="Public Speaking" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <GroupIcon style={{ color: "#61DAFB", fontSize: "3rem", marginRight: "1.5rem" }} />
                                </ListItemIcon>
                                <ListItemText primary="Working in teams and groups" />
                            </ListItem>
                        </List>
                    </ScrollAnimation>
                    <ScrollAnimation style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column" }} animateIn='bounceInRight' animateOnce={true}>
                        <Typography variant="h5" gutterBottom style={{ color: "white" }}>
                            During Development courses and Freelance jobs:
                        </Typography>
                        <List component="nav" className={classes.root} aria-label="exprience">
                            <ListItem button>
                                <ListItemIcon>
                                    <CodeIcon style={{ color: "#61DAFB", fontSize: "3rem", marginRight: "1.5rem" }} />
                                </ListItemIcon>
                                <ListItemText primary="Proficient in using the latest programing languages: Javascript, Golang, Python, ..." />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <WebIcon style={{ color: "#61DAFB", fontSize: "3rem", marginRight: "1.5rem" }} />
                                </ListItemIcon>
                                <ListItemText primary="Familiar with the most powerful, popular web development frameworks: Reactjs, Boostrap, Material-UI, Sql and No-sql Databases, REST API, GraphQL, Ajax ... to create desktop/mobile responsive websites" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <PowerIcon style={{ color: "#61DAFB", fontSize: "3rem", marginRight: "1.5rem" }} />
                                </ListItemIcon>
                                <ListItemText primary="Experience in using development technologies like Git, Npm, Create-react-app, Docker, Websocket..." />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <DescriptionIcon style={{ color: "#61DAFB", fontSize: "3rem", marginRight: "1.5rem" }} />
                                </ListItemIcon>
                                <ListItemText primary="Be able to read and understand well English documentations" />
                            </ListItem>
                            <ListItem button>
                                <ListItemIcon>
                                    <KeyboardReturnIcon style={{ color: "#61DAFB", fontSize: "3rem", marginRight: "1.5rem" }} />
                                </ListItemIcon>
                                <ListItemText primary="Be able to change between languages, frameworks and technologies fast if neccessary" />
                            </ListItem>
                        </List>
                    </ScrollAnimation>
                </Box>
            </Box>
        </div>
    )
}
