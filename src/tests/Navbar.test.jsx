import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Navbar } from 'react-bootstrap';
import { MemoryRouter } from 'react-router-dom';

describe('Apply tests for Navbar component', () => {
  const component = (
    <MemoryRouter>
      <Navbar />
    </MemoryRouter>
  );

  test('Navbar has the nav component', () => {
    render(component);
    const nav = screen.getByRole('navigation');
    expect(nav).toBeInTheDocument();
  });

  test('Navbar does not have any children in normal case', () => {
    render(component);
    const nav = screen.getByRole('navigation');
    expect(nav.children).toHaveLength(0);
  });

  test('Navbar does not have the normal html anchor element', () => {
    render(component);
    const link = screen.queryByRole('link');
    expect(link).not.toBeInTheDocument();
  });
});
