import axios from 'axios';
import TwitterService from '../TwitterService';
import axiosMocks from '../../testUtils/axiosMocks';

jest.mock('axios');

describe('Should load tweets from Twitter through axios', () => {
  const username = 'Fake user name';
  const { findUserByName, getTweetsFromUser } = TwitterService();

  test('when load user info', async () => {
    axiosMocks.mockAxiosGetResolve({ username });

    const foundUser = await findUserByName(username);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(foundUser).toEqual({ username });
  });

  test('when user has tweets', async () => {
    axiosMocks.mockAxiosGetResolve([{ id: 'f-a-k-e-t-w-e-t-i-d ' }]);

    const foundTweets = await getTweetsFromUser(username);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(foundTweets).toEqual([{ id: 'f-a-k-e-t-w-e-t-i-d ' }]);
  });

  test('when user has no tweets', async () => {
    axiosMocks.mockAxiosGetResolve([]);

    const foundTweets = await getTweetsFromUser(username);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(foundTweets).toEqual([]);
  });
});
