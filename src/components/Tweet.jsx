import { Card, Grid } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import React from 'react';
import Moment from 'react-moment';

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
  // eslint-disable-next-line no-console
  console.log(likes, quotes, replies, retweets);

  return (
    <Card className={classes.card.root} variant="outlined">
      <CardContent>
        <Grid container spacing={2} className={classes.card.content}>
          <Grid item xs={12}>
            <Typography color="textPrimary">{text}</Typography>
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
  createdAt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  metrics: PropTypes.shape({
    like_count: PropTypes.number,
    quote_count: PropTypes.number,
    reply_count: PropTypes.number,
    retweet_count: PropTypes.number,
  }).isRequired,
};

export default Tweet;
