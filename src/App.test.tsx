import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App Component', () => {
  test('renders the Button component', () => {
    render(<App />);
    const buttonComponent = screen.getByRole('button', { name: /this is a cool button/i });
    expect(buttonComponent).toBeInTheDocument();
  });
});
