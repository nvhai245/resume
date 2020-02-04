import React from 'react';
import './App.css';
import PageBar from './components/PageBar';
import Box from '@material-ui/core/Box';
import AboutMe from './components/AboutMe';
import Skills from './components/Skills';
import Container from '@material-ui/core/Container';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PageBar />
      </header>
      <Container >
        <Box id={`content-for-simple-tab-0`}>
          <AboutMe />
        </Box>
        <Box id={`content-for-simple-tab-1`}>
          <Skills />
        </Box>
        <Box id={`content-for-simple-tab-2`}>

        </Box>
        <Box id={`content-for-simple-tab-3`}>

        </Box>
        <Box id={`content-for-simple-tab-4`}>

        </Box>
        <Box id={`content-for-simple-tab-5`}>

        </Box>
      </Container>
    </div>
  );
}

export default App;
