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

  const loadTweets = (username) => {
    dispatch(new LoadTweetsAction());

    TwitterService.getTweetsFromUser(username)
      .then((foundTweets) => {
        dispatch(new LoadTweetsSuccessfullyAction(foundTweets));
      })
      .catch((responseError) => {
        dispatch(new LoadTweetsFailedAction(responseError));
      });
  };

  const loadUserInfo = (username) => {
    dispatch(new LoadUserAction());

    TwitterService.findUserByName(username)
      .then(({ data }) => data)
      .then((foundUser) => {
        dispatch(new LoadUserSuccessfullyAction(foundUser));
        dispatch(new LoadTweetsAction());
        loadTweets(foundUser.username);
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
    loadUser: (username) => loadUserInfo(username),
  };
};

export default TwitterApi;
