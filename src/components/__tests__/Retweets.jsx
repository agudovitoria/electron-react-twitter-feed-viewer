import { render } from '@testing-library/react';
import React from 'react';
import { getRetweetsElement } from '../../testUtils/selectors';
import Retweets from '../Retweets';

describe('It should render retweets component', () => {
  test('with count text value', () => {
    const count = 10;

    render(<Retweets count={count} />);

    const element = getRetweetsElement();

    const retweetsValueElement = element.children[1];

    expect(element).toBeInTheDocument();
    expect(element.children.length).toBe(2);
    expect(retweetsValueElement).toHaveClass('MuiChip-label');
    expect(retweetsValueElement).toHaveTextContent(count.toString());
  });
});
