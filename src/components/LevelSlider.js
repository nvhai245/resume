import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  root: {
    width: 300 + 24 * 2,
    padding: 24
  },
  margin: {
    height: theme.spacing(3)
  }
}));

const marks = [
  {
    value: 40,
    label: 'Fresher',
  },
  {
    value: 70,
    label: 'Intermediate',
  },
  {
    value: 95,
    label: 'Advanced',
  },
];

function valuetext(value) {
  return `${value}°C`;
}

const NoTrackSlider = withStyles({
  markActive: {
    backgroundColor: "primary"
  }
})(Slider);

export default function LevelSlider() {
  const classes = useStyles();

  return (
      <NoTrackSlider 
      style={{width: "100%"}}
      step={10} 
      valueLabelDisplay="on" 
      marks={marks} 
      defaultValue={70}
      />
  );
}