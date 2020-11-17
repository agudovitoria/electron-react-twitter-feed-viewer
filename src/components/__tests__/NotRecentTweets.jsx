import { render } from '@testing-library/react';
import React from 'react';
import { getMessageElement } from '../../testUtils/selectors';
import NotRecentTweets from '../NotRecentTweets';

describe('It should render not recent tweets component', () => {
  test('with valid text', () => {
    const message = 'Selected user has not recent tweets. Sorry :(';

    render(<NotRecentTweets />);

    const element = getMessageElement(message);

    expect(element).toBeInTheDocument();
  });
});
