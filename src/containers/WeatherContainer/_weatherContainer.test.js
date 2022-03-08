import { render, screen } from '@testing-library/react';
import AppTestProviders from 'utils/tests/AppTestProviders';
import WeatherContainer from './index';

test('renders weather Container with Empty Data', () => {
  render(
    <AppTestProviders>
      <WeatherContainer />
    </AppTestProviders>
  );
  const linkElement = screen.getByText(/pas de données disponibles/i);
  expect(linkElement).toBeInTheDocument();
});
