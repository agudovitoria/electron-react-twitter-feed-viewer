import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Tooltip, Chip, Icon } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flex: 1,
    padding: theme.spacing(1),
  },
}));

const Metric = ({ icon, count, help }) => {
  const classes = useStyles();

  return (
    <Tooltip title={help} className={classes.root}>
      <Chip
        icon={<Icon className={icon} fontSize="small" color="secondary" />}
        label={count}
        color="secondary"
        variant="outlined"
        size="small"
      />
    </Tooltip>
  );
};

Metric.propTypes = {
  icon: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  help: PropTypes.string.isRequired,
};
export default Metric;
