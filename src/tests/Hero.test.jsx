import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Hero from '../components/Hero';

describe('Apply tests for Hero component', () => {
  test('Take Snapshot from Hero', () => {
    const home = render(<Hero />);
    expect(home).toMatchSnapshot();
  });

  test('Hero has an image component', () => {
    render(<Hero />);
    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();
  });

  test('Hero has a heading component', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  test('Heading of Hero has three children', () => {
    render(<Hero />);
    const heading = screen.getByRole('heading');
    expect(heading.children).toHaveLength(3);
  });
});
