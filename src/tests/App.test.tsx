import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

test('renders the whole app in the screen', () => {
  render(<App />);
  const linkElement = screen.getByText(/currency converter/i);
  expect(linkElement).toBeInTheDocument();
});