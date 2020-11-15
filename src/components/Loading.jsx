import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, CircularProgress, Typography } from '@material-ui/core';

const useStyles = makeStyles(() => ({
  root: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CircularProgress />
      <Typography>Loading tweets</Typography>
    </Box>
  );
};

export default Loading;
