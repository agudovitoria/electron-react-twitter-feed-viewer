import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import React from 'react';
import NavBar from './components/NavBar';
import Tweets from './pages/Tweets';

const useStyles = makeStyles((theme) => ({
  content: {
    paddingTop: theme.spacing(8),
  },
}));

/**
 * App root component
 */
const App = () => {
  const classes = useStyles();

  return (
    <Container maxWidth={false}>
      <Container>
        <NavBar />
      </Container>

      <Container maxWidth={false} className={classes.content}>
        <Tweets />
      </Container>
    </Container>
  );
};

export default App;
