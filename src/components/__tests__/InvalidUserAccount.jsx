import { render } from '@testing-library/react';
import React from 'react';
import { getInvalidUserAccountElement } from '../../testUtils/selectors';
import InvalidUserAccount from '../InvalidUserAccount';

describe('It should render invalid user account component', () => {
  test('with valid message', () => {
    render(<InvalidUserAccount />);

    const element = getInvalidUserAccountElement();

    expect(element).toBeInTheDocument();
  });
});
