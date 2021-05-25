import { getByTestId, render, screen } from '@testing-library/react';
import Cards from '../components/Cards/Cards';


test('<Cards> learn react link', () => {
 const component =render(<Cards key="ticker"
    exchange="NASDAQ"
    price="300"
    change="0.9"
    change_percent="0.5"
    dividend="7"
    />);
  expect(component.container).toMatchSnapshot()
});

