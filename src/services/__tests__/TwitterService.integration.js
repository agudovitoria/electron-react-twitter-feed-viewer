import axios from 'axios';
import TwitterService from '../TwitterService';
import axiosMocks from '../../testUtils/axiosMocks';

jest.mock('axios');

describe('Should load tweets from Twitter through axios', () => {
  const username = 'Fake user name';
  const { findUserByName, getTweetsFromUser } = TwitterService();

  test('when load user info', async () => {
    axiosMocks.mockAxiosGetResolve({ data: { username } });

    const foundUser = await findUserByName(username);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(foundUser).toEqual({ username });
  });

  test('when user has tweets', async () => {
    axiosMocks.mockAxiosGetResolve({ data: { data: [] } });

    const foundTweets = await getTweetsFromUser(username);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(foundTweets).toEqual([]);
  });

  test('when user has no tweets', async () => {
    axiosMocks.mockAxiosGetResolve({ data: { data: null } });

    const foundTweets = await getTweetsFromUser(username);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(foundTweets).toEqual([]);
  });
});
