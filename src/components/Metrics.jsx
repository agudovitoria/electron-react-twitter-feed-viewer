import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import Likes from './Likes';
import Replies from './Replies';
import Quotes from './Quotes';
import Retweets from './Retweets';

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
  likes: PropTypes.number.isRequired,
  quotes: PropTypes.number.isRequired,
  replies: PropTypes.number.isRequired,
  retweets: PropTypes.number.isRequired,
};

export default Metrics;
