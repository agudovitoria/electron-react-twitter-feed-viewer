import TweetsLoadedSuccessfullyAction from '../actions/TweetsLoadedSuccessfullyAction';
import TweetsLoadFailedAction from '../actions/TweetsLoadFailedAction';
import UserLoadedSuccessfullyAction from '../actions/UserLoadedSuccessfullyAction';
import UserLoadFailedAction from '../actions/UserLoadFailedAction';
import { useTwitterDispatch, useTwitterState } from '../providers/TwitterContextProvider';
import { findUserByName, getTweetsFromUser } from '../services/TwitterService';

const loadTweets = async (dispatch, username) => {
  const retrieveTweetsFor = (userName) => getTweetsFromUser(userName);

  try {
    const foundUser = await retrieveTweetsFor(username);
    dispatch(new TweetsLoadedSuccessfullyAction(foundUser));
  } catch (error) {
    dispatch(new TweetsLoadFailedAction(error));
  }
};

const loadUserInfo = async (dispatch, username) => {
  const lookForUsername = (userName) => findUserByName(userName).then(({ data }) => data);

  try {
    const foundUser = await lookForUsername(username);
    dispatch(new UserLoadedSuccessfullyAction(foundUser));
    loadTweets(dispatch, foundUser.username);
  } catch (error) {
    dispatch(new UserLoadFailedAction(error));
  }
};

const TwitterApi = () => {
  const { loading, error, user, tweets } = useTwitterState();
  const dispatch = useTwitterDispatch();

  return {
    loading,
    error,
    user,
    tweets,
    loadTweets: () => loadTweets(dispatch, user.username),
    loadUser: (username) => loadUserInfo(dispatch, username),
  };
};

export default TwitterApi;
