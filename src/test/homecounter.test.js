import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // Import jest-dom
import HomeCounter from '../components/reactactions/homecounter';

test('renders home counter with initial count of 0', () => {
  const { getByText } = render(<HomeCounter />);
  const countElement = getByText(/Count: 0/i);
  expect(countElement).toBeInTheDocument();
});

test('increments and decrements count correctly', () => {
  const { getByText } = render(<HomeCounter />);
  const incrementButton = getByText(/Increment/i);
  const decrementButton = getByText(/Decrement/i);
  const countElement = getByText(/Count:/i);

  fireEvent.click(incrementButton);
  expect(countElement.textContent).toBe('Count: 1');

  fireEvent.click(decrementButton);
  expect(countElement.textContent).toBe('Count: 0');
});
