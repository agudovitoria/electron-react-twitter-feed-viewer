import axios from 'axios';

import twitterApiConfig from '../config/twitterApiConfig';

const TwitterApiInstance = axios.create({
  baseURL: twitterApiConfig.baseUrl,
  headers: {
    authorization: `Bearer ${twitterApiConfig.bearerToken}`,
  },
});

export const getTweetsFromUser = (userName) =>
  TwitterApiInstance.get('tweets/search/recent', {
    params: {
      query: `from:${userName}`,
      max_results: 100,
      'tweet.fields': ['created_at', 'public_metrics', 'referenced_tweets', 'text'].join(','),
    },
  })
    .then(({ data }) => data)
    .then(({ data }) => data || []);

export const findUserByName = (username) =>
  TwitterApiInstance.get(`users/by/username/${username}`, {
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
