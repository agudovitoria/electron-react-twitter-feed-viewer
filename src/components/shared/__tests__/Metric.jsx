import React from 'react';
import { render, screen } from '@testing-library/react';
import Metric from '../Metric';

test('it should loads and display Metric component successfully', () => {
  const icon = 'fakeIcon';
  const count = 0;
  const help = 'Fake help message';
  render(<Metric icon={icon} count={count} help={help} />);

  const helpElements = screen.getAllByTitle(help);

  expect(helpElements.length).toBe(1);
  expect(helpElements[0]).toHaveTextContent(count);
});
