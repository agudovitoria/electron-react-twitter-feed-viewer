import { render } from '@testing-library/react';
import React from 'react';
import {
  getLikesElement,
  getQuotesElement,
  getRepliesElement,
  getRetweetsElement,
} from '../../testUtils/selectors';
import Metrics from '../Metrics';

describe('It should render replies component', () => {
  test('with count text value', () => {
    const likes = 10;
    const quotes = 20;
    const replies = 30;
    const retweets = 40;

    render(<Metrics likes={likes} quotes={quotes} replies={replies} retweets={retweets} />);

    expect(getLikesElement(likes)).toBeInTheDocument();
    expect(getQuotesElement(quotes)).toBeInTheDocument();
    expect(getRepliesElement(replies)).toBeInTheDocument();
    expect(getRetweetsElement(retweets)).toBeInTheDocument();
  });
});
