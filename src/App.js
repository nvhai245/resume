import React from 'react';
import './App.css';
import ScrollAnimation from 'react-animate-on-scroll';
import PageBar from './components/PageBar';
import Box from '@material-ui/core/Box';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Container from '@material-ui/core/Container';
import Education from './components/Education';
import Experience from './components/Experience';
import MyProjects from './components/MyProjects';
import Contact from './components/Contact';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  section: {
    marginBottom: "3rem"
  }
}));

function App() {
  const classes= useStyles();
  return (
    <div className="App">
      <header className="App-header">
        <PageBar />
      </header>
      <Container className={classes.root}>
          <Box className={classes.section} id={`content-for-simple-tab-0`}>
            <AboutMe />
          </Box>
          <Box className={classes.section} id={`content-for-simple-tab-1`}>
            <Skills />
          </Box>
          <Box className={classes.section} id={`content-for-simple-tab-2`}>
            <Education />
          </Box>
          <Box className={classes.section} id={`content-for-simple-tab-3`}>
            <Experience />
          </Box>
          <Box className={classes.section} id={`content-for-simple-tab-4`}>
            <MyProjects />
          </Box>
          <Box id={`content-for-simple-tab-5`}>
            <Contact />
          </Box>
      </Container>
    </div>
      );
    }
    
    export default App;
