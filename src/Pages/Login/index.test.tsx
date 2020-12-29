/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable function-paren-newline */
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import userEvent from '@testing-library/user-event';
import { createMemoryHistory } from 'history';
import { notify } from 'react-notify-toast';
import { Router, Route } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { endpoints } from 'constants/endpoint';

import UserContextProvider from 'Context/UserContext';
import Login from '.';

const server = setupServer(
  rest.post(`${endpoints.backend}api/user/login`, (req, res, ctx) =>
    res(
      ctx.json({
        success: true,
        message: 'Welcome back Test User',
        data: {
          name: 'Test User',
          token: 'ey',
        },
      })
    )
  )
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('Login screen', () => {
  test('Renders the whole page', () => {
    render(<Login />);

    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
  });

  test('Forms fail if one input is empty', () => {
    render(<Login />);
    notify.show = jest.fn();

    userEvent.type(screen.getByLabelText('Login:email'), 'Hey xd');
    userEvent.click(screen.getByRole('button', { name: 'Login:login' }));

    expect(notify.show).toHaveBeenCalledWith('Login:verifyData', 'error');
  });

  test('Form fails if email input is not populated correctly', async () => {
    render(<Login />);
    notify.show = jest.fn();

    userEvent.type(screen.getByLabelText('Login:email'), 'Hey xd');
    userEvent.type(screen.getByLabelText('Login:password'), 'Hey xd');
    userEvent.click(screen.getByRole('button', { name: 'Login:login' }));

    expect(notify.show).toHaveBeenCalledWith('Login:verifyData', 'error');
  });

  test('Redirects perfectly when inputs are populated', async () => {
    const history = createMemoryHistory();
    notify.show = jest.fn();

    history.push('/login');

    render(
      <UserContextProvider>
        <Router history={history}>
          <Route path="/" exact>
            <div />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
        </Router>
      </UserContextProvider>
    );

    userEvent.type(screen.getByLabelText('Login:email'), 'test@test.com');
    userEvent.type(screen.getByLabelText('Login:password'), 'asd123123');
    userEvent.click(screen.getByRole('button', { name: 'Login:login' }));

    await waitFor(() =>
      expect(history.entries[history.index].pathname).toBe('/')
    );
  });
});
