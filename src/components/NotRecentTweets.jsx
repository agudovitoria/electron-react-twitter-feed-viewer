import React from 'react';
import Message from './Message';

/**
 * Show error message if user has not recent tweets published
 *
 * @component
 * @see {@link Message} Message component
 */
const NotRecentTweets = () => <Message text="Selected user has not recent tweets. Sorry :(" />;

export default NotRecentTweets;
