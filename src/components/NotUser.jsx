import React from 'react';
import Message from './Message';

/**
 * Show error message if not user account is selected
 *
 * @component
 * @see {@link Message} Message component
 */
const NotUser = () => (
  <Message text="Please, search for a user on Twitter on top navbar to retrieve tweets" />
);

export default NotUser;
