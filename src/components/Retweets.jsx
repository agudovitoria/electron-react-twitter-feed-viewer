import PropTypes from 'prop-types';
import React from 'react';

import Metric from './shared/Metric';

/**
 * Show tweet retweets via Metric component
 *
 * @component
 * @example
 * const count=100
 * return (
 *   <Retweets count={count} />
 * )
 * @link Metric
 */
const Retweets = ({ count }) => <Metric icon="fas fa-retweet" count={count} help="Retweets" />;

Retweets.propTypes = {
  /** count number of likes */
  count: PropTypes.number.isRequired,
};
export default Retweets;
