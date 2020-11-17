import axios from 'axios';
import TwitterService from '../TwitterService';

jest.mock('axios');

describe('Should load tweets from Twitter through axios', () => {
  const username = 'Fake user name';
  test('when load user info', async () => {
    const response = { data: { username } };

    axios.create = jest.fn().mockReturnValue({
      get: jest.fn().mockImplementationOnce(() => Promise.resolve(response)),
    });
    axios.get.mockImplementationOnce(() => Promise.resolve(response));

    const foundUser = await TwitterService.findUserByName(username);

    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(foundUser).toEqual({ username });
  });

  test('when user has tweets', async () => {
    const response = { data: { data: [] } };

    axios.create = jest.fn().mockReturnValue({
      get: jest.fn().mockImplementationOnce(() => Promise.resolve(response)),
    });

    axios.get.mockImplementationOnce(() => Promise.resolve(response));

    const foundTweets = await TwitterService.getTweetsFromUser(username);

    expect(axios.get).toHaveBeenCalledTimes(1);

    expect(foundTweets).toEqual([]);
  });

  test('when user has no tweets', async () => {
    const response = { data: { data: null } };

    axios.create = jest.fn().mockReturnValue({
      get: jest.fn().mockImplementationOnce(() => Promise.resolve(response)),
    });

    axios.get.mockImplementationOnce(() => Promise.resolve(response));

    const foundTweets = await TwitterService.getTweetsFromUser(username);

    expect(axios.get).toHaveBeenCalledTimes(1);

    expect(foundTweets).toEqual([]);
  });
});
