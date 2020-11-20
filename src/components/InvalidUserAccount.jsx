import React from 'react';
import Message from './Message';

/**
 * Show error message if user account is invalid
 *
 * @component
 * @see {@link Message} Message component
 */
const InvalidUserAccount = () => (
  <Message text="User does not exists on Twitter or account is invalid, Please search again." />
);

export default InvalidUserAccount;
