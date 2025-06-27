import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Vaibhav Chavan home heading', () => {
  render(<App />);
  // Checks for your name in the Home hero section
  const headingElement = screen.getByText(/Vaibhav Chavan/i);
  expect(headingElement).toBeInTheDocument();
});

test('renders cybersecurity tagline', () => {
  render(<App />);
  // Checks for your tagline or profession
  const taglineElement = screen.getByText(/Cybersecurity Enthusiast/i);
  expect(taglineElement).toBeInTheDocument();
});
