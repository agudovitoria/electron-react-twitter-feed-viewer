import { act, render } from '@testing-library/react';
import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import TwitterService from '../../services/TwitterService';
import {
  TwitterDispatchContext,
  TwitterStateContext,
} from '../../providers/TwitterContextProvider';
import TwitterReducer from '../../reducers/TwitterReducer';
import TwitterApi from '../TwitterApi';

jest.mock('../../services/TwitterService');

describe('Should load tweets through TwitterService', () => {
  let onGetTweetsFromUser;
  let onFindUserByName;

  const initialState = {
    loading: false,
    error: null,
    user: {
      username: 'FakeUserName',
    },
    tweets: [],
  };

  const LoadUserComponent = () => {
    const { loadUser } = TwitterApi();

    act(() => {
      loadUser();
    });

    return <div />;
  };

  const TwitterProviderComponent = ({ children }) => {
    const [state, dispatch] = useReducer(TwitterReducer, initialState);

    return (
      <TwitterStateContext.Provider value={state}>
        <TwitterDispatchContext.Provider value={dispatch}>
          {children}
        </TwitterDispatchContext.Provider>
      </TwitterStateContext.Provider>
    );
  };

  TwitterProviderComponent.propTypes = {
    children: PropTypes.node.isRequired,
  };

  afterEach(() => {
    jest.clearAllMocks();
    onGetTweetsFromUser.resetMocks();
    onFindUserByName.resetMocks();
  });

  test('when load user info from service resolves properly', () => {
    onFindUserByName = jest.spyOn(TwitterService, 'findUserByName').mockResolvedValue({
      data: {},
    });

    render(
      <TwitterProviderComponent>
        <LoadUserComponent />
      </TwitterProviderComponent>
    );

    expect(onFindUserByName).toHaveBeenCalledTimes(1);
  });
});
