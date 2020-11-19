import LoadTweetsAction from '../actions/LoadTweetsAction';
import LoadTweetsSuccessfullyAction from '../actions/LoadTweetsSuccessfullyAction';
import LoadTweetsFailedAction from '../actions/LoadTweetsFailedAction';
import LoadUserAction from '../actions/LoadUserAction';
import LoadUserSuccessfullyAction from '../actions/LoadUserSuccessfullyAction';
import LoadUserFailedAction from '../actions/LoadUserFailedAction';
import { useTwitterDispatch, useTwitterState } from '../providers/TwitterContextProvider';
import TwitterService from '../services/TwitterService';

const TwitterApi = () => {
  const { loading, error, user, tweets } = useTwitterState();
  const dispatch = useTwitterDispatch();
  const { getTweetsFromUser, findUserByName } = TwitterService();

  const loadTweets = (username) => {
    dispatch(new LoadTweetsAction());

    getTweetsFromUser(username)
      .then((foundTweets) => (Array.isArray(foundTweets) ? foundTweets : []))
      .then((foundTweets) => {
        dispatch(new LoadTweetsSuccessfullyAction(foundTweets));
      })
      .catch((responseError) => {
        dispatch(new LoadTweetsFailedAction(responseError));
      });
  };

  const loadUser = (username) => {
    dispatch(new LoadUserAction());

    findUserByName(username)
      .then((foundUser) => {
        dispatch(new LoadUserSuccessfullyAction(foundUser));
        loadTweets(foundUser.username);
        localStorage.setItem('lastUserName', foundUser.username);
      })
      .catch((responseError) => {
        dispatch(new LoadUserFailedAction(responseError));
      });
  };

  return {
    loading,
    error,
    user,
    tweets,
    loadUser: (username) => loadUser(username),
  };
};

export default TwitterApi;
