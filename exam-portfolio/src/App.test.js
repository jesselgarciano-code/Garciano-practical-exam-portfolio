import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the portfolio layout', () => {
  render(<App />);
  expect(screen.getByRole('navigation', { name: /main navigation/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /welcome to my portfolio/i })).toBeInTheDocument();
  expect(screen.getByRole('contentinfo')).toBeInTheDocument();
});
