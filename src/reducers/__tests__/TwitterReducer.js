import TwitterReducer from '../TwitterReducer';
import LoadTweetsAction from '../../actions/LoadTweetsAction';
import LoadTweetsSuccessfullyAction from '../../actions/LoadTweetsSuccessfullyAction';
import LoadTweetsFailedAction from '../../actions/LoadTweetsFailedAction';
import LoadUserAction from '../../actions/LoadUserAction';
import LoadUserSuccessfullyAction from '../../actions/LoadUserSuccessfullyAction';
import LoadUserFailedAction from '../../actions/LoadUserFailedAction';

describe('Should manage Twitter state properly', () => {
  test('when invalid action is dispatched', () => {
    const initialState = {
      loading: false,
      error: null,
      user: null,
      tweets: [],
    };

    const fakeInvalidAction = { type: 'fakeAction', payload: {} };

    const reducedState = TwitterReducer(initialState, fakeInvalidAction);

    expect(reducedState).toStrictEqual(initialState);
  });

  test('when LoadTweetsAction is dispatched', () => {
    const initialState = {
      loading: false,
      error: null,
      user: null,
      tweets: [],
    };

    const reducedState = TwitterReducer(initialState, new LoadTweetsAction());

    const expectedState = {
      ...initialState,
      loading: true,
    };
    expect(reducedState).toStrictEqual(expectedState);
  });

  test('when LoadTweetsSuccessfully is dispatched', () => {
    const initialState = {
      loading: true,
      error: null,
      user: null,
      tweets: [],
    };

    const fakeTweets = [{ id: 'f-a-k-e-t-w-e-e-t-i-d', text: 'Fake tweet text' }];
    const reducedState = TwitterReducer(initialState, new LoadTweetsSuccessfullyAction(fakeTweets));

    const expectedState = {
      ...initialState,
      loading: false,
      tweets: fakeTweets,
    };
    expect(reducedState).toStrictEqual(expectedState);
  });

  test('when LoadTweetsFailed is dispatched', () => {
    const initialState = {
      loading: true,
      error: null,
      user: null,
      tweets: [],
    };

    const fakeError = { id: 'f-a-k-e-e-r-r-o-r', message: 'Fake error message' };
    const reducedState = TwitterReducer(initialState, new LoadTweetsFailedAction(fakeError));

    const expectedState = {
      ...initialState,
      loading: false,
      error: fakeError,
    };
    expect(reducedState).toStrictEqual(expectedState);
  });

  test('when LoadUserAction is dispatched', () => {
    const initialState = {
      loading: false,
      error: null,
      user: null,
      tweets: [],
    };

    const reducedState = TwitterReducer(initialState, new LoadUserAction());

    const expectedState = {
      ...initialState,
      loading: true,
    };
    expect(reducedState).toStrictEqual(expectedState);
  });

  test('when LoadUserSuccessfullyAction is dispatched', () => {
    const initialState = {
      loading: true,
      error: null,
      user: null,
      tweets: [],
    };

    const fakeUser = { id: 'f-a-k-e-u-s-e-r-i-d', name: 'Fake user name' };
    const reducedState = TwitterReducer(initialState, new LoadUserSuccessfullyAction(fakeUser));

    const expectedState = {
      ...initialState,
      loading: false,
      user: fakeUser,
    };
    expect(reducedState).toStrictEqual(expectedState);
  });

  test('when LoadUserFailedAction is dispatched', () => {
    const initialState = {
      loading: true,
      error: null,
      user: null,
      tweets: [],
    };

    const fakeError = { id: 'f-a-k-e-e-r-r-o-r', message: 'Fake error message' };
    const reducedState = TwitterReducer(initialState, new LoadUserFailedAction(fakeError));

    const expectedState = {
      ...initialState,
      loading: false,
      error: fakeError,
    };
    expect(reducedState).toStrictEqual(expectedState);
  });
});
