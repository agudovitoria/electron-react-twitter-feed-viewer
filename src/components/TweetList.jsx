import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import React from 'react';

import NotRecentTweets from './NotRecentTweets';
import Tweet from './Tweet';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
  tweet: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

const TweetList = ({ tweets }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.root}>
      {tweets.length ? (
        tweets.map(({ id, text, created_at: createdAt, public_metrics: metrics }) => (
          <Grid item xs={4} key={id}>
            <Tweet className={classes.tweet} text={text} createdAt={createdAt} metrics={metrics} />
          </Grid>
        ))
      ) : (
        <NotRecentTweets />
      )}
    </Grid>
  );
};

TweetList.propTypes = {
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      created_at: PropTypes.string.isRequired,
      public_metrics: PropTypes.shape({
        likes: PropTypes.number,
        quotes: PropTypes.number,
        replies: PropTypes.number,
        retweets: PropTypes.number,
      }).isRequired,
    })
  ).isRequired,
};

export default TweetList;
