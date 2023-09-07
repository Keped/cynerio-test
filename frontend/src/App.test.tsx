import React from 'react';
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './store';

const WrappedApp = () => <Provider store={store}><App /></Provider>

test('renders Add user button', () => {
  render(<WrappedApp />);
  const buttonElement = screen.getByText(/Add User/i);
  expect(buttonElement).toBeInTheDocument();
});


test('show, hide Add user modal', async () => {
  render(<WrappedApp />);
  const buttonElement = screen.getByText(/Add User/i);
  act(() => fireEvent.click(buttonElement));
  expect(screen.getByText(/Cancel/)).toBeInTheDocument();
});