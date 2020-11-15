import PropTypes from 'prop-types';
import React from 'react';
import Metric from './shared/Metric';

const Likes = ({ count }) => <Metric icon="fas fa-thumbs-up" count={count} help="Likes" />;

Likes.propTypes = {
  count: PropTypes.number.isRequired,
};
export default Likes;
