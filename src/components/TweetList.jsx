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

/**
 * Show user tweets
 *
 * @component
 * @param {array} tweets user tweets
 */
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
  /** user tweets */
  tweets: PropTypes.arrayOf(
    PropTypes.shape({
      /** tweet identifier */
      id: PropTypes.string.isRequired,
      /** tweet text */
      text: PropTypes.string.isRequired,
      /** tweet creation date */
      created_at: PropTypes.string.isRequired,
      /** tweet metrics */
      public_metrics: PropTypes.shape({
        /** tweet likes */
        likes: PropTypes.number,
        /**  tweet quotes */
        quotes: PropTypes.number,
        /** tweet replies */
        replies: PropTypes.number,
        /** tweet retweets */
        retweets: PropTypes.number,
      }).isRequired,
    })
  ).isRequired,
};

export default TweetList;
