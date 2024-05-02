import React from 'react';
import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button Component', () => {
  test('renders the button with the correct text', () => {
    render(<Button />);
    const buttonElement = screen.getByText("This is a cool button");
    expect(buttonElement).toBeInTheDocument();
  });

  test('has the correct class', () => {
    render(<Button />);
    const buttonElement = screen.getByText("This is a cool button");
    expect(buttonElement).toHaveClass('cool-green-btn');
  });
});
