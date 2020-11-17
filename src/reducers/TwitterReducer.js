import {
  LoadTweets,
  LoadTweetsSuccessfully,
  LoadTweetsFailed,
  LoadUser,
  LoadUserSuccessfully,
  LoadUserFailed,
} from '../actions/TwitterActions';

const TwitterReducer = (state, action) => {
  switch (action.type) {
    case LoadTweets: {
      return {
        ...state,
        error: null,
        loading: true,
      };
    }

    case LoadTweetsSuccessfully: {
      return {
        ...state,
        tweets: action.payload,
        error: null,
        loading: false,
      };
    }

    case LoadTweetsFailed: {
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
        user: null,
        loading: true,
      };
    }

    case LoadUserSuccessfully: {
      return {
        ...state,
        user: action.payload,
        error: null,
        loading: false,
      };
    }

    case LoadUserFailed: {
      return {
        ...state,
        error: action.payload,
        loading: false,
        user: null,
      };
    }

    default: {
      return state;
    }
  }
};

export default TwitterReducer;
