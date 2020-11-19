import React from 'react';
import PropTypes from 'prop-types';
import Metric from './shared/Metric';

/**
 * Show tweet quotes via Metric component
 *
 * @component
 * @example
 * const count=100
 * return (
 *   <Quotes count={count} />
 * )
 * @link Metric
 */
const Quotes = ({ count }) => <Metric icon="fas fa-quote-right" count={count} help="Quotes" />;

Quotes.propTypes = {
  /** count number of likes */
  count: PropTypes.number.isRequired,
};
export default Quotes;
