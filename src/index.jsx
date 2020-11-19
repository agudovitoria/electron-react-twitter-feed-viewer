import './index.css';

import { ThemeProvider } from '@material-ui/core/styles';
import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import theme from './theme';
import setupAxios from './setupAxios';
import { TwitterProvider } from './providers/TwitterContextProvider';

/** Setup axios default configuration and interceptors */
setupAxios();

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <TwitterProvider>
        <App />
      </TwitterProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
