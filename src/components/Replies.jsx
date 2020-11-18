import React from 'react';
import PropTypes from 'prop-types';

import Metric from './shared/Metric';

const Replies = ({ count }) => <Metric icon="fas fa-reply" count={count} help="Replies" />;

Replies.propTypes = {
  count: PropTypes.number.isRequired,
};
export default Replies;
