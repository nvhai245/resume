import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';
import LinkIcon from '@material-ui/icons/Link';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import ScrollAnimation from 'react-animate-on-scroll';

const useStyles = makeStyles(theme => ({
    root: {
        width: '70%',
        backgroundColor: "none",
        color: 'white',
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
}));

export default function MyProjects() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const [open2, setOpen2] = React.useState(true);
    const [open3, setOpen3] = React.useState(true);
    const handleClick = () => {
      setOpen(!open)
    };
    const handleClick2 = () => {
        setOpen2(!open2)
      };
      const handleClick3 = () => {
        setOpen3(!open3)
      };
    return (
        <div>
            <ScrollAnimation animateIn='fadeIn' animateOnce={true}>
            <Box fontFamily="Monospace" style={{ display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
                <Typography variant="h3" gutterBottom style={{ color: "white" }}>
                    My Projects
                </Typography>
                <List
                component="nav"
                aria-labelledby="my-projects"
                style={{width: "60%", color: "white"}}
                >
      <ListItem button onClick={handleClick} style={{backgroundColor: "#41B883"}}>
        <ListItemIcon>
        <img src="https://img.icons8.com/cute-clipart/50/000000/angry-face-meme.png" style={{marginRight: "1rem"}} />
        </ListItemIcon>
        <ListItemText primary="A memes generator site" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <LinkIcon style={{color: "#41B883", fontSize: "2rem"}} />
            </ListItemIcon>
            <Link style={{color: "#41B883", fontSize: "1rem"}} href="https://fresh-memes.herokuapp.com/create">
               https://fresh-memes.herokuapp.com/create
            </Link>
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <GitHubIcon style={{color: "#41B883", fontSize: "2rem"}} />
            </ListItemIcon>
            <Link style={{color: "#41B883", fontSize: "1rem"}} href="https://github.com/nvhai245/memetuoi">
               https://github.com/nvhai245/memetuoi
            </Link>
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleClick2} style={{backgroundColor: "#FFD845"}}>
        <ListItemIcon>
        <img src="https://img.icons8.com/doodle/50/000000/dribbble-old-logo.png" style={{marginRight: "1rem"}} />
        </ListItemIcon>
        <ListItemText style={{color: "black"}} primary="A simple Nextjs social media site" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <LinkIcon style={{color: "#FFD845", fontSize: "2rem"}} />
            </ListItemIcon>
            <Link style={{color: "#FFD845", fontSize: "1rem"}} href="#">
               
            </Link>
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <GitHubIcon style={{color: "#FFD845", fontSize: "2rem"}} />
            </ListItemIcon>
            <Link style={{color: "#FFD845", fontSize: "1rem"}} href="https://github.com/nvhai245/next-connect">
               https://github.com/nvhai245/next-connect
            </Link>
          </ListItem>
        </List>
      </Collapse>

      <ListItem button onClick={handleClick2} style={{backgroundColor: "#75CEDE"}}>
        <ListItemIcon>
        <img src="https://img.icons8.com/color/48/000000/google-blog-search.png" style={{marginRight: "1rem"}} />
        </ListItemIcon>
        <ListItemText style={{color: "black"}} primary="A simple blog site using Golang and Reactjs" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <LinkIcon style={{color: "#75CEDE", fontSize: "2rem"}} />
            </ListItemIcon>
            <Link style={{color: "#75CEDE", fontSize: "1rem"}} href="#">
               
            </Link>
          </ListItem>
          <ListItem className={classes.nested}>
            <ListItemIcon>
              <GitHubIcon style={{color: "#75CEDE", fontSize: "2rem"}} />
            </ListItemIcon>
            <Link style={{color: "#75CEDE", fontSize: "1rem"}} href="https://github.com/nvhai245/myblog">
              https://github.com/nvhai245/myblog
            </Link>
          </ListItem>
        </List>
      </Collapse>
    </List>
            </Box>
            </ScrollAnimation>
        </div>
    )
}
