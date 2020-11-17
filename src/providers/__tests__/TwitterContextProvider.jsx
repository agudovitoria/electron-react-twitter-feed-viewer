import { render } from '@testing-library/react';
import React from 'react';
import { TwitterDispatchContext, TwitterStateContext } from '../TwitterContextProvider';

describe('Should manage TwitterContextProvider properly', () => {
  const renderedProvider = () => {
    const state = {};
    const dispatch = jest.fn();

    render(
      <TwitterStateContext.Provider value={state}>
        <TwitterDispatchContext.Provider value={{ dispatch }}>
          <div />
        </TwitterDispatchContext.Provider>
      </TwitterStateContext.Provider>
    );
  };

  test('Should not thrown an error when has both providers', () => {
    expect(renderedProvider).not.toThrow();
  });
});
