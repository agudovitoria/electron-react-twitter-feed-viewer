import { render, screen } from '@testing-library/react';
import React from 'react';
import { getQuotesElement } from '../../testUtils/selectors';
import Quotes from '../Quotes';

describe('It should render quote component', () => {
  test('with count text value', () => {
    const count = 10;

    render(<Quotes count={count} />);

    const element = getQuotesElement();

    const quotesValueElement = element.children[1];

    expect(element).toBeInTheDocument();
    expect(element.children.length).toBe(2);
    expect(quotesValueElement).toHaveClass('MuiChip-label');
    expect(quotesValueElement).toHaveTextContent(count.toString());
  });
});
