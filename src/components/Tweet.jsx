import { Card, Grid } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import Moment from 'react-moment';
import Linkify from 'react-linkify';

import Metrics from './Metrics';

const useStyles = makeStyles((theme) => ({
  card: {
    root: {
      flex: 1,
    },
    content: {
      padding: theme.spacing(1),
    },
  },
}));

/**
 * Show user tweet
 *
 * @component
 * @param {Object} tweet - User tweet
 * @param {string} tweet.text - Tweet text
 *  @param {Date} tweet.created_at - Tweet creation date
 *  @param {Object} tweet.public_metrics - Tweet public metrics
 *    @param {number} tweet.public_metrics.likes - Tweet likes
 *    @param {number} tweet.public_metrics.quotes - Tweet quotes
 *    @param {number} tweet.public_metrics.replies - Tweet replies
 *    @param {number} tweet.public_metrics.retweets - Tweet retweets
 */
const Tweet = ({
  text,
  createdAt,
  metrics: {
    like_count: likes,
    quote_count: quotes,
    reply_count: replies,
    retweet_count: retweets,
  },
}) => {
  const classes = useStyles();

  return (
    <Card className={classes.card.root} variant="outlined">
      <CardContent>
        <Grid container spacing={2} className={classes.card.content}>
          <Grid item xs={12}>
            <Typography color="textPrimary">
              <Linkify>{text}</Linkify>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Metrics likes={likes} quotes={quotes} replies={replies} retweets={retweets} />
          </Grid>
          <Grid item xs={12}>
            <Typography color="textSecondary" variant="caption">
              <Moment format="YY/MM/DD h:mm a">{createdAt}</Moment>
            </Typography>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

Tweet.propTypes = {
  /** Tweet created date */
  createdAt: PropTypes.string.isRequired,
  /** Tweet text */
  text: PropTypes.string.isRequired,
  /** Tweet metrics */
  metrics: PropTypes.shape({
    /** Tweet likes */
    like_count: PropTypes.number,
    /** Tweet quotes */
    quote_count: PropTypes.number,
    /** Tweet replies */
    reply_count: PropTypes.number,
    /** Tweet retweets */
    retweet_count: PropTypes.number,
  }).isRequired,
};

export default Tweet;
