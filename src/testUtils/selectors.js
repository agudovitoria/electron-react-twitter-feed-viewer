import { screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import moment from 'moment';

export const getUserSearchInputElement = () => screen.getByTestId('twitter-user-search-input');
export const getUserSearchButtonElement = () => screen.getByTestId('twitter-user-search-button');
export const getLikesElement = () => screen.getByTitle('Likes');
export const getQuotesElement = () => screen.getByTitle('Quotes');
export const getRepliesElement = () => screen.getByTitle('Replies');
export const getRetweetsElement = () => screen.getByTitle('Retweets');
export const getInvalidUserAccountElement = () =>
  screen.getByText('User does not exists on Twitter or account is invalid, Please search again.');
export const getMessageElement = (text) => screen.getByText(text);
export const getProfileAvatar = (altText) => screen.getByAltText(altText);
export const getProfileName = (name) => screen.getByText(name);
export const getProfileUserName = (username) => screen.getByText(`@${username}`);
export const getProfileLocation = (location) => screen.getByText(location);
export const getProfileCreatedDate = (createdDate) =>
  screen.getByText(moment(createdDate).format('YYYY/MM/DD').toString());
