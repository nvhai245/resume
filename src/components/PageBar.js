import React, { useState, useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Box from '@material-ui/core/Box';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Zoom from '@material-ui/core/Zoom';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

function ScrollTop(props) {
  const { children, window } = props;
  const classes = useStyles();
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');

    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function PageBar(props) {
  const [value, setValue] = React.useState(0);
  const classes = useStyles();
  const handleChange = (event, newValue) => {
    setValue(newValue);
    const selectedTab = document.getElementById(`content-for-${event.currentTarget.id}`);
    selectedTab.scrollIntoView({ behavior: 'smooth' });
  };

  const [navBackground, setNavBackground] = useState(false);
  const navRef = useRef();
  navRef.current = navBackground;
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100
      if (navRef.current !== show) {
        setNavBackground(show)
      }
    };
    document.addEventListener('scroll', handleScroll);
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, []);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar 
      className={classes.appBar}
      style={{
        transition: '1s ease',
        boxShadow: navBackground ? 3 : 'none',
        backgroundColor: navBackground ? 'white' : 'transparent',
      }}
      >
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example" centered>
          <Tab label="About me" {...a11yProps(0)} style={{color: navBackground ? "black" : "white"}} />
          <Tab label="Skills" {...a11yProps(1)} style={{color: navBackground ? "black" : "white"}} />
          <Tab label="Education" {...a11yProps(2)} style={{color: navBackground ? "black" : "white"}} />
          <Tab label="Experience" {...a11yProps(3)} style={{color: navBackground ? "black" : "white"}} />
          <Tab label="My Projects" {...a11yProps(4)} style={{color: navBackground ? "black" : "white"}} />
          <Tab label="Contact" {...a11yProps(5)} style={{color: navBackground ? "black" : "white"}} />
        </Tabs>
      </AppBar>
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
      <Toolbar id="back-to-top-anchor" />
    </React.Fragment>
  );
}
