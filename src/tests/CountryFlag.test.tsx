import React from 'react';
import { render, screen } from '@testing-library/react';
import CountryFlag from '../components/CountryFlag';

test('renders CountryFlag component', () => {
  render(<CountryFlag countryAlpha2Code={'USD'} />);
  const linkElement = screen.getByAltText(/country flag/i);
  expect(linkElement).toBeInTheDocument();
});