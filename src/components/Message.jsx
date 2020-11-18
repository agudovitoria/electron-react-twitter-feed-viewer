import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, Icon, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    paddingTop: theme.spacing(24),
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  pos: {
    fontSize: '32px',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

const Message = ({ text }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Typography className={classes.pos} align="center">
            <Icon className="fab fa-twitter" color="secondary" variant="h1" />
          </Typography>
          <Typography color="textSecondary">{text}</Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

Message.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Message;
