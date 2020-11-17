import axios from 'axios';

import twitterApiConfig from '../config/twitterApiConfig';

const TwitterService = () => {
  const TwitterApiInstance = axios.create({
    baseURL: twitterApiConfig.baseUrl,
    headers: {
      authorization: `Bearer ${twitterApiConfig.bearerToken}`,
    },
  });

  const getTweetsFromUser = (userName) =>
    TwitterApiInstance.get(twitterApiConfig.recentTweetsUrl, {
      params: {
        query: `from:${userName}`,
        max_results: 100,
        'tweet.fields': ['created_at', 'public_metrics', 'referenced_tweets', 'text'].join(','),
      },
    })
      .then(({ data }) => data)
      .then(({ data }) => data || []);

  const findUserByName = (username) =>
    TwitterApiInstance.get(`${twitterApiConfig.tweetsForUsernameUrl}/${username}`, {
      params: {
        'user.fields': [
          'created_at',
          'description',
          'id',
          'location',
          'name',
          'pinned_tweet_id',
          'profile_image_url',
          'username',
          'verified',
          'withheld',
        ].join(','),
      },
    }).then(({ data }) => data);

  return {
    getTweetsFromUser: (username) => getTweetsFromUser(username),
    findUserByName: (username) => findUserByName(username),
  };
};

export default TwitterService();
