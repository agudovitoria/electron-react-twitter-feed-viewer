import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Box, CircularProgress, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    paddingTop: theme.spacing(24),
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

/**
 * Show loading spinner component
 *
 * @component
 */
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
