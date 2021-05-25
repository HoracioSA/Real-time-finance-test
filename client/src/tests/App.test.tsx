import { getByTestId, render, screen } from '@testing-library/react';
import App from '../App';

test('renders learn react link', () => {
  render(<App/>);
  
  expect(
    getByTestId(document.documentElement, 'html-element'),
  ).toBeInTheDocument()
});
