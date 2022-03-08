import { render, screen } from '@testing-library/react';
import AdminContainer from 'containers/AdminContainer/index';
import AppTestProviders from 'utils/tests/AppTestProviders';

describe('render form ', () => {
  test('render a for with default value', () => {
    render(
      <AppTestProviders>
        <AdminContainer />
      </AppTestProviders>
    );

    const dateInput = screen.getByRole('date');
    const temperatureInput = screen.getByRole('temperature');
    const atmosphereInput = screen.getByRole('atmosphere');
    const formButton = screen.getByRole('submit');
    expect(formButton).toBeVisible();
    expect(dateInput).toBeInTheDocument();
    expect(temperatureInput).toBeInTheDocument();
    expect(atmosphereInput).toBeInTheDocument();
  });
});
