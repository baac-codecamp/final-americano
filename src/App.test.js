import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/หน้าหลัก/i);
  expect(linkElement).toBeInTheDocument();
});
