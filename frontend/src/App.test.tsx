import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import Header from "./components/Header/Header";

test('renders header title',() => {
  render (<Header />);
  const headerTitle = screen.getByText(/This is header/);
  expect(headerTitle).toBeInTheDocument()
})
