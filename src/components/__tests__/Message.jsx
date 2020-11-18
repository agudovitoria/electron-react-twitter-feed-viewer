import { render } from '@testing-library/react';
import React from 'react';
import { getMessageElement } from '../../testUtils/selectors';
import Message from '../Message';

describe('It should render message component', () => {
  test('with valid text', () => {
    const message = 'Test message';

    render(<Message text={message} />);

    const element = getMessageElement(message);

    expect(element).toBeInTheDocument();
  });
});
