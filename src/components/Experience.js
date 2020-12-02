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
import {Timeline, TimelineItem} from "vertical-timeline-component-for-react";
import DeveloperBoardIcon from '@material-ui/icons/DeveloperBoard';
import LotusBackEndEngineer from "./LotusBackEndEngineer";

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
            <Box style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <Typography variant="h3" gutterBottom style={{ color: "white" }}>
                    Work Experience
                </Typography>
                <Box style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column", width: "70%" }}>
                    <ScrollAnimation style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column" }} animateIn='bounceInRight' animateOnce={true}>
                        <Timeline lineColor={'#ddd'}>
                            <TimelineItem
                                key="002"
                                dateText="Feb 2019 - "
                                dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                                bodyContainerStyle={{
                                    background: 'none',
                                }}
                            >
                                <LotusBackEndEngineer />
                            </TimelineItem>
                        </Timeline>
                    </ScrollAnimation>
                    <ScrollAnimation style={{ display: "flex", alignItems: "center", justifyContent: "flex-start", flexDirection: "column" }} animateIn='bounceInRight' animateOnce={true}>

                    </ScrollAnimation>
                </Box>
            </Box>
        </div>
    )
}
