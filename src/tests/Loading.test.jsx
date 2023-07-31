import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Loading from '../components/Loading';

describe('Apply tests for Loading component', () => {
  test('Take snapshot from Loading', () => {
    const loading = render(<Loading />);
    expect(loading).toMatchSnapshot();
  });

  test('Take snapshot from Loading', () => {
    const loading = render(<Loading />);
    expect(loading).toMatchSnapshot();
  });

  test('Loading has an element with the text of please wait', () => {
    render(<Loading />);
    const text = screen.getByText(/Please wait.../i);
    expect(text).toBeInTheDocument();
  });
});
