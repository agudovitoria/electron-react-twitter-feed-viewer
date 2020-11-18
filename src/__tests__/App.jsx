import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import twitterApiConfig from '../config/twitterApiConfig';
import { getUserSearchInputElement, getUserSearchButtonElement } from '../testUtils/selectors';
import App from '../App';

const server = setupServer(
  rest.get(twitterApiConfig.recentTweetsUrl, (req, res, ctx) => res(ctx.status(400))),
  rest.get(`${twitterApiConfig.recentTweetsUrl}/fakeUser`, (req, res, ctx) =>
    res(
      ctx.status(200),
      ctx.json({
        data: {
          user: 'fakeUser',
          name: 'Fake User',
        },
      })
    )
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

const renderApp = () => {
  render(<App />);
};

describe('It should render main page', () => {
  test('with valid title', () => {
    renderApp();

    const titleElement = screen.getByText('Twitter feeds');

    expect(titleElement).toBeInTheDocument();
  });
});

describe.skip('It should search user properly', () => {
  test('with no username typed', () => {
    renderApp();

    const textMessageElement = screen.getByText(
      'User does not exists on Twitter or account is invalid, Please search again.'
    );

    fireEvent.input(getUserSearchInputElement(), '');
    fireEvent.click(getUserSearchButtonElement());

    expect(textMessageElement).toBeInTheDocument();
  });

  test('with username typed', () => {
    renderApp();

    const textMessageElement = screen.getByText(
      'User does not exists on Twitter or account is invalid, Please search again.'
    );

    fireEvent.input(getUserSearchInputElement(), 'fakeUser');
    fireEvent.click(getUserSearchButtonElement());

    expect(textMessageElement).toBeInTheDocument();
  });
});
