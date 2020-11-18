import { cleanup, fireEvent, render } from '@testing-library/react';
import React from 'react';
import UserSearch from '../UserSearch';
import { getUserSearchButtonElement, getUserSearchInputElement } from '../../testUtils/selectors';

jest.mock('../../api/TwitterApi');

describe('It should call to api to retrieve data', () => {
  const value = 'FakeUser';

  const renderSearchInputComponent = () => render(<UserSearch />);

  afterEach(() => {
    cleanup();
  });

  test('when click on search button', async () => {
    renderSearchInputComponent();

    await fireEvent.change(getUserSearchInputElement(), { target: { value } });
    await fireEvent.click(getUserSearchButtonElement());

    expect(getUserSearchInputElement()).toHaveValue(value);
    expect(getUserSearchInputElement()).toHaveDisplayValue(value);
    expect(getUserSearchInputElement()).toBeDisabled();
    expect(getUserSearchButtonElement()).toBeDisabled();
  });

  test('when press enter', async () => {
    renderSearchInputComponent();

    await fireEvent.change(getUserSearchInputElement(), { target: { value } });
    await fireEvent.keyPress(getUserSearchInputElement(), { key: 'Enter' });

    expect(getUserSearchInputElement()).toHaveDisplayValue(value);
    expect(getUserSearchInputElement()).toHaveValue(value);
    expect(getUserSearchInputElement()).toBeDisabled();
    expect(getUserSearchButtonElement()).toBeDisabled();
  });
});
