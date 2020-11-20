import { render } from '@testing-library/react';
import React from 'react';

import {
  TwitterDispatchContext,
  TwitterStateContext,
} from '../../providers/TwitterContextProvider';
import UserSearch from '../UserSearch';
import { getUserSearchButtonElement, getUserSearchInputElement } from '../../testUtils/selectors';

jest.mock('../../api/TwitterApi');

const initialState = {
  loading: false,
  error: {},
  user: {},
  tweets: [],
};

const renderSearchInputComponent = (state = initialState) => {
  const dispatch = jest.fn();

  render(
    <TwitterStateContext.Provider value={state}>
      <TwitterDispatchContext.Provider value={{ dispatch }}>
        <UserSearch />
      </TwitterDispatchContext.Provider>
    </TwitterStateContext.Provider>
  );
};

describe('Should render search components', () => {
  describe('Should render user search input', () => {
    test('without initial value', () => {
      renderSearchInputComponent();

      expect(getUserSearchInputElement()).not.toHaveValue();
    });

    test('with valid placeholder', () => {
      renderSearchInputComponent();

      expect(getUserSearchInputElement()).toHaveAttribute('placeholder', 'Enter username...');
    });
  });

  describe('Should render user search button', () => {
    test('with valid text', () => {
      renderSearchInputComponent();

      expect(getUserSearchButtonElement()).toHaveTextContent('Search');
    });
  });
});
