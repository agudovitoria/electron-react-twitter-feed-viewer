import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Box, Card, CardContent, CardHeader, Icon, Typography } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';

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

/**
 * Show error message for Twitter api response
 *
 * @component
 */
const Error = ({ title, detail, type }) => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <CardHeader
        disableTypography
        title={<Typography color="error">{title}</Typography>}
        avatar={<Icon className="fab fa-twitter" color="error" variant="h1" />}
      />
      <Card className={classes.card} variant="outlined">
        <CardContent>
          <Grid container spacing={1}>
            <Grid item xs={12}>
              <Typography color="secondary">{detail}</Typography>
            </Grid>
            <Grid item xs={12}>
              <Link href={type} variant="caption" color="error">
                More info about this
              </Link>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </Box>
  );
};

Error.propTypes = {
  title: PropTypes.string.isRequired,
  detail: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default Error;
