import TwitterService from '../TwitterService';

jest.mock('../TwitterService');

describe('Should load tweets through TwitterService', () => {
  test('when load user info', async () => {
    const username = 'Fake user name';
    const onFindUserByName = jest
      .spyOn(TwitterService, 'findUserByName')
      .mockResolvedValue({ username });

    const foundUser = await TwitterService.findUserByName('Fake user name');

    expect(onFindUserByName).toHaveBeenCalledTimes(1);
    expect(foundUser).toEqual({ username });
  });

  test('when load user tweets', async () => {
    const onGetTweetsFromUser = jest
      .spyOn(TwitterService, 'getTweetsFromUser')
      .mockResolvedValue([]);

    const foundTweets = await TwitterService.getTweetsFromUser('Fake user name');

    expect(onGetTweetsFromUser).toHaveBeenCalledTimes(1);
    expect(foundTweets).toEqual([]);
  });
});
