import { render, screen, waitFor } from '@testing-library/react';
import store from 'state/store';
import { addWeather } from 'state/weather/actions';
import AppTestProviders from 'utils/tests/AppTestProviders';
import WeatherContainer from './index';

describe('empty store data', () => {
  test('renders weather Container with Empty Data', () => {
    render(
      <AppTestProviders>
        <WeatherContainer />
      </AppTestProviders>
    );
    const linkElement = screen.getByText(/pas de données disponibles/i);
    expect(linkElement).toBeInTheDocument();
  });
});

describe('filled store data', () => {
  beforeEach(async () => {
    console.log('before dispatching add weather action');
    await store.dispatch(
      addWeather({
        dayName: 'Monday',
        date: new Date().toLocaleDateString(),
        atmosphere: 'Sunny',
        temperature: '12'
      })
    );
  });

  test('renders weather Container with initialized Data', async () => {
    await waitFor(() => {
      render(
        <AppTestProviders>
          <WeatherContainer />
        </AppTestProviders>
      );
    });
    const dayNameElements = screen.getAllByText(/Monday/i);
    const atmosphere = screen.getByText(/Sunny/i);
    expect(atmosphere).toBeInTheDocument();
    dayNameElements.forEach((item) => {
      expect(item).toBeInTheDocument();
    });
  });
});
