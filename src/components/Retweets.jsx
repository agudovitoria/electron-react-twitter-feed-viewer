import PropTypes from 'prop-types';
import React from 'react';

import Metric from './shared/Metric';

const Retweets = ({ count }) => <Metric icon="fas fa-retweet" count={count} help="Retweets" />;

Retweets.propTypes = {
  count: PropTypes.number.isRequired,
};
export default Retweets;
