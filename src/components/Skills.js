import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import LevelSlider from './LevelSlider';
import Paper from '@material-ui/core/Paper';

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
            <Box style={{width: "50%"}} fontFamily="Monospace" m={1}>
                <Typography variant="h3" gutterBottom style={{textAlign: "center"}}>
                    My Skills
                </Typography>
                <List className={classes.root}>
                    <ListItem className={classes.skillInfo} alignItems="flex-start">
                        <i className="devicon-javascript-plain colored" style={{fontSize: "2rem", marginRight: "1rem"}} />
                        <ListItemText
                            primary="Javascript"
                            secondary={
                                    <LevelSlider />
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText
                            primary="Reactjs"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                    >
                                        t
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemText
                            primary="Golang"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        component="span"
                                        variant="body2"
                                        className={classes.inline}
                                    >
                                        S
                                    </Typography>
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                </List>
            </Box>
        </div>
    )
}
