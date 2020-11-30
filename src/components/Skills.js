import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import LevelSlider from './LevelSlider';
import ScrollAnimation from 'react-animate-on-scroll';
import SkillReact from "./SkillReact";
import Grid from '@material-ui/core/Grid';
import SkillNextJs from "./SkillNextJs";
import SkillNodeJs from "./SkillNodeJs";
import SkillGo from "./SkillGo";
import SkillSQL from "./SkillSQL";
import SkillNoSQL from "./SkillNoSQL";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        color: 'white',
    },
}));

export default function Skills() {
    const classes = useStyles();
    return (
        <ScrollAnimation animateIn='bounceInRight' animateOnce={true}>
            <div fontFamily="Monospace" className={classes.root}>
                {/*<Typography variant="h3" gutterBottom style={{textAlign: "center"}}>*/}
                {/*    My Skills*/}
                {/*</Typography>*/}
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom style={{textAlign: "center"}}>
                            Front-end
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <SkillReact/>
                    </Grid>
                    <Grid item xs={6}>
                        <SkillNextJs/>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant="h5" gutterBottom style={{textAlign: "center"}}>
                            Back-end
                        </Typography>
                    </Grid>
                    <Grid item xs={6}>
                        <SkillNodeJs/>
                    </Grid>
                    <Grid item xs={6}>
                        <SkillGo/>
                    </Grid>
                    <Grid item xs={6}>
                        <SkillSQL/>
                    </Grid>
                    <Grid item xs={6}>
                        <SkillNoSQL/>
                    </Grid>
                </Grid>
            </div>
        </ScrollAnimation>
    )
}
