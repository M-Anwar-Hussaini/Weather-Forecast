import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Province from '../components/Province';

const province = (
  <Province className="" description="Kabul" icon="01d" province="Kabul" temprature={23} />
);
describe('Apply tests for Province component', () => {
  test('Take snapshot from Province', () => {
    const pro = render(province);
    expect(pro).toMatchSnapshot();
  });

  test('Province has a figure element', () => {
    render(province);
    const figure = screen.getByRole('figure');
    expect(figure).toBeInTheDocument();
  });

  test('figue element has one direct child', () => {
    render(province);
    const figure = screen.getByRole('figure');
    expect(figure.children).toHaveLength(1);
  });

  test('Wrapper component has 2 children', () => {
    render(province);
    const figure = screen.getByRole('figure');
    expect(figure.children[0].children).toHaveLength(2);
  });
});
