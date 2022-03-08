import { getWeekDates } from 'utils/dates';

const atmosphere = ['Sunny', 'Cloudy', 'Snowy', 'Rainy'];

export const weekWeatherData = getWeekDates().map((day) => ({
  ...day,
  temperature: Math.floor(Math.random() * 20) + 15,
  atmosphere: atmosphere[Math.floor(Math.random() * 3) + 1]
}));
