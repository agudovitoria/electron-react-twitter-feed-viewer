import React from 'react';
import PropTypes from 'prop-types';
import { Tooltip, Chip, Icon } from '@material-ui/core';

const Metric = ({ icon, count, help }) => {
  return (
    <Tooltip title={help}>
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
