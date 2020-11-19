import './App.css';

import { makeStyles } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Tweets from './pages/Tweets';

import { TwitterProvider } from './providers/TwitterContextProvider';

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
    <Router>
      <TwitterProvider>
        <Container>
          <NavBar />
        </Container>

        <Switch>
          <Route exact path="/">
            <Container maxWidth={false} className={classes.content}>
              <Tweets />
            </Container>
          </Route>
        </Switch>
      </TwitterProvider>
    </Router>
  );
};

export default App;
