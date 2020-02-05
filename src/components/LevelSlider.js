import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  margin: {
    height: theme.spacing(3)
  }
}));

const marks = [
  {
    value: 30,
    label: 'Fresher',
  },
  {
    value: 60,
    label: 'Intermediate',
  },
  {
    value: 95,
    label: 'Advanced',
  },
];

const NoTrackSlider = withStyles({
  markActive: {
    backgroundColor: "white"
  },
  markLabel: {
    color: "white"
  }
})(Slider);

export default function LevelSlider(props) {
  const classes = useStyles();

  return (
      <NoTrackSlider 
      style={{width: "100%", color: props.color}}
      step={10} 
      valueLabelDisplay="on" 
      marks={marks} 
      value={props.level}
      />
  );
}