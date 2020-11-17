import { render, screen } from '@testing-library/react';
import React from 'react';
import { getLikesElement } from '../../testUtils/selectors';
import Likes from '../Likes';

describe('It should render like component', () => {
  test('with count text value', () => {
    const count = 10;

    render(<Likes count={count} />);

    const element = getLikesElement();
    const likesValueElement = element.children[1];

    expect(element).toBeInTheDocument();
    expect(element.children.length).toBe(2);
    expect(likesValueElement).toHaveClass('MuiChip-label');
    expect(likesValueElement).toHaveTextContent(count.toString());
  });
});
