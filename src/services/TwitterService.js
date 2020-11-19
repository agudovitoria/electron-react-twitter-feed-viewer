import axios from 'axios';

const { REACT_APP_RECENT_TWEETS_URL, REACT_APP_FIND_BY_USERNAME_URL } = process.env;

const TwitterService = () => {
  const getTweetsFromUser = (userName) =>
    axios.get(REACT_APP_RECENT_TWEETS_URL, {
      params: {
        query: `from:${userName}`,
        max_results: 100,
        'tweet.fields': ['created_at', 'public_metrics', 'referenced_tweets', 'text'].join(','),
      },
    });

  const findUserByName = (username) =>
    axios.get(`${REACT_APP_FIND_BY_USERNAME_URL}/${username}`, {
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
    });

  return {
    getTweetsFromUser: (username) => getTweetsFromUser(username),
    findUserByName: (username) => findUserByName(username),
  };
};

export default TwitterService;
