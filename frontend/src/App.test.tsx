import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Add user button', () => {
  render(<App />);
  const buttonElement = screen.getByText(/Add User/i);
  expect(buttonElement).toBeInTheDocument();
});
