import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import jest-dom

import Counter from '../components/reactactions/reactcouter';

test('renders counter with initial count of 0', () => {
  const { getByText } = render(<Counter />);
  const countElement = getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument(); // Use toBeInTheDocument
});

test('increments and decrements count correctly', () => {
  const { getByText } = render(<Counter />);
  const incrementButton = getByText(/Increment/i);
  const decrementButton = getByText(/Decrement/i);
  const countElement = getByText(/Count:/i);

  fireEvent.click(incrementButton);
  expect(countElement.textContent).toBe('Count: 1');

  fireEvent.click(decrementButton);
  expect(countElement.textContent).toBe('Count: 0');
});
