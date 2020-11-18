import React from 'react';
import PropTypes from 'prop-types';
import Metric from './shared/Metric';

const Quotes = ({ count }) => <Metric icon="fas fa-quote-right" count={count} help="Quotes" />;

Quotes.propTypes = {
  count: PropTypes.number.isRequired,
};
export default Quotes;
