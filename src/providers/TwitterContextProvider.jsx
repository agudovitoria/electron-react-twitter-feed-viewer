import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import TwitterReducer from '../reducers/TwitterReducer';

const initialState = {
  loading: false,
  error: null,
  user: null,
  tweets: [],
};

const TwitterStateContext = createContext();
const TwitterDispatchContext = createContext();

const TwitterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TwitterReducer, initialState);

  return (
    <TwitterStateContext.Provider value={state}>
      <TwitterDispatchContext.Provider value={dispatch}>{children}</TwitterDispatchContext.Provider>
    </TwitterStateContext.Provider>
  );
};

const useTwitterState = () => {
  const context = useContext(TwitterStateContext);
  if (context === undefined) {
    throw new Error('useTwitterState must be used within a TwitterProvider');
  }
  return context;
};

const useTwitterDispatch = () => {
  const context = useContext(TwitterDispatchContext);
  if (context === undefined) {
    throw new Error('useTwitterDispatch must be used within a TwitterProvider');
  }
  return context;
};

TwitterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export {
  TwitterStateContext,
  TwitterDispatchContext,
  TwitterProvider,
  useTwitterState,
  useTwitterDispatch,
};
