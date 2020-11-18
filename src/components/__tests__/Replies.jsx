import { render } from '@testing-library/react';
import React from 'react';
import { getQuotesElement, getRepliesElement } from '../../testUtils/selectors';
import Replies from '../Replies';

describe('It should render replies component', () => {
  test('with count text value', () => {
    const count = 10;

    render(<Replies count={count} />);

    const element = getRepliesElement();

    const repliesValueElement = element.children[1];

    expect(element).toBeInTheDocument();
    expect(element.children.length).toBe(2);
    expect(repliesValueElement).toHaveClass('MuiChip-label');
    expect(repliesValueElement).toHaveTextContent(count.toString());
  });
});
