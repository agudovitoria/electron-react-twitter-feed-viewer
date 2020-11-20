import React from 'react';
import PropTypes from 'prop-types';

import Metric from './shared/Metric';

/**
 * Show tweet replies via Metric component
 *
 * @component
 * @example
 * const count=100
 * return (
 *   <Replies count={count} />
 * )
 * @link Metric
 */
const Replies = ({ count }) => <Metric icon="fas fa-reply" count={count} help="Replies" />;

Replies.propTypes = {
  /** count number of likes */
  count: PropTypes.number.isRequired,
};
export default Replies;
