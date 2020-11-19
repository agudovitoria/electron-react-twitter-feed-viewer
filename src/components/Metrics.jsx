import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Likes from './Likes';
import Replies from './Replies';
import Quotes from './Quotes';
import Retweets from './Retweets';

/**
 * Show tweet metrics component via Likes, Quotes, Replies and Retweets components
 *
 * @component
 * @param {number} likes tweet likes
 * @param {number} quotes tweet quotes
 * @param {number} replies tweet replies
 * @param {number} retweets tweet retweets
 * @see {@link Likes}
 * @see {@link Quotes}
 * @see {@link Replies{}
 * @see {@link Retweets}
 */
const Metrics = ({ likes, quotes, replies, retweets }) => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={3}>
        <Likes count={likes} />
      </Grid>
      <Grid item xs={3}>
        <Quotes count={quotes} />
      </Grid>
      <Grid item xs={3}>
        <Replies count={replies} />
      </Grid>
      <Grid item xs={3}>
        <Retweets count={retweets} />
      </Grid>
    </Grid>
  );
};

Metrics.propTypes = {
  /** likes number to show */
  likes: PropTypes.number.isRequired,
  /** quotes number to show */
  quotes: PropTypes.number.isRequired,
  /** replies number to show */
  replies: PropTypes.number.isRequired,
  /** retweets number to show */
  retweets: PropTypes.number.isRequired,
};

export default Metrics;
