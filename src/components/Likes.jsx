import PropTypes from 'prop-types';
import React from 'react';
import Metric from './shared/Metric';

/**
 * Show tweet likes via Metric component
 *
 * @component
 * @example
 * const count=100
 * return (
 *   <Likes count={count} />
 * )
 * @link Metric
 */

const Likes = ({ count }) => <Metric icon="fas fa-thumbs-up" count={count} help="Likes" />;

Likes.propTypes = {
  /** count number of likes */
  count: PropTypes.number.isRequired,
};
export default Likes;
