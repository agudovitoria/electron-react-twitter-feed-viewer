import React, { createContext, useContext, useReducer } from 'react';
import PropTypes from 'prop-types';
import {
  LoadTweets,
  TweetsLoadedSuccessfully,
  TweetsLoadFailed,
  LoadUser,
  UserLoadedSuccessfully,
  UserLoadFailed,
} from '../actions/TwitterActions';

const initialState = {
  // TODO: Remove mock user
  loading: false,
  error: null,
  user: {
    // created_at: '2010-07-11T17:34:34.000Z',
    // description:
    //   'Desarrollador de profesión,  administrador de sistemas por vocación y motorista por pasión.',
    // id: '165473566',
    // location: 'Alicante, Comunidad Valenciana',
    // name: 'Iñaki',
    // profile_image_url:
    //   'https://pbs.twimg.com/profile_images/1101429648058171394/ZUvvzuRk_normal.png',
    // username: 'iagudovitoria',
    // verified: false,
  },
  tweets: [],
};

const TwitterStateContext = createContext();
const TwitterDispatchContext = createContext();

const TwitterProvider = ({ children }) => {
  const twitterReducer = (state, action) => {
    switch (action.type) {
      case LoadTweets: {
        return {
          ...state,
          error: null,
          loading: true,
        };
      }

      case TweetsLoadedSuccessfully: {
        return {
          ...state,
          tweets: action.payload,
          error: null,
          loading: false,
        };
      }

      case TweetsLoadFailed: {
        return {
          ...state,
          error: action.payload,
          loading: false,
          tweets: [],
        };
      }

      case LoadUser: {
        return {
          ...state,
          error: null,
          loading: true,
        };
      }

      case UserLoadedSuccessfully: {
        return {
          ...state,
          user: action.payload,
          error: null,
          loading: false,
        };
      }

      case UserLoadFailed: {
        return {
          ...state,
          error: action.payload,
          loading: false,
          user: {},
        };
      }

      default: {
        return state;
      }
    }
  };

  const [state, dispatch] = useReducer(twitterReducer, initialState);

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

export { TwitterProvider, useTwitterState, useTwitterDispatch };
