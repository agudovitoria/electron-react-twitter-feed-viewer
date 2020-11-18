import { render } from '@testing-library/react';
import React from 'react';
import { getMessageElement } from '../../testUtils/selectors';
import NotUser from '../NotUser';

describe('It should render not user component', () => {
  test('with valid text', () => {
    const message = 'Please, search for a user on Twitter on top navbar to retrieve tweets';

    render(<NotUser />);

    const element = getMessageElement(message);

    expect(element).toBeInTheDocument();
  });
});
