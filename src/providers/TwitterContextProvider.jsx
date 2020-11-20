import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import TwitterReducer from '../reducers/TwitterReducer';

/**
 * Initial state to sotere in the context
 *
 * @type {Object}
 */
const initialState = {
  loading: false,
  error: null,
  user: null,
  tweets: [],
};

const TwitterStateContext = createContext();
const TwitterDispatchContext = createContext();

/**
 * Twitter context provider
 *
 * @category providers
 * @param children - Children components with Twitter provider access to render
 * @return {JSX.Element} - Children components with access to provider included
 * @constructor
 */
const TwitterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(TwitterReducer, initialState);

  return (
    <TwitterStateContext.Provider value={state}>
      <TwitterDispatchContext.Provider value={dispatch}>{children}</TwitterDispatchContext.Provider>
    </TwitterStateContext.Provider>
  );
};

/**
 * Twitter context state access
 * Throws an error if is not defined properly
 *
 * @return {Object}
 */
const useTwitterState = () => {
  const context = useContext(TwitterStateContext);
  if (context === undefined) {
    throw new Error('useTwitterState must be used within a TwitterProvider');
  }
  return context;
};

/**
 * Twitter context dispatch access
 * Throws an error if is not defined properly
 *
 * @return {Object}
 */
const useTwitterDispatch = () => {
  const context = useContext(TwitterDispatchContext);
  if (context === undefined) {
    throw new Error('useTwitterDispatch must be used within a TwitterProvider');
  }
  return context;
};

TwitterProvider.propTypes = {
  /** children components */
  children: PropTypes.node.isRequired,
};

export {
  TwitterStateContext,
  TwitterDispatchContext,
  TwitterProvider,
  useTwitterState,
  useTwitterDispatch,
};
