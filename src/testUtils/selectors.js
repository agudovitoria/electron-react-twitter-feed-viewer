import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';

export const getUserSearchInputElement = () => screen.getByTestId('twitter-user-search-input');
export const getUserSearchButtonElement = () => screen.getByTestId('twitter-user-search-button');
export const getLikesElement = () => screen.getByTitle('Likes');
export const getQuotesElement = () => screen.getByTitle('Quotes');
export const getRepliesElement = () => screen.getByTitle('Replies');
export const getRetweetsElement = () => screen.getByTitle('Retweets');
export const getInvalidUserAccountElement = () =>
  screen.getByText('User does not exists on Twitter or account is invalid, Please search again.');
