import { getDayNameFromDate } from 'utils/dates';

export const buildDayWeatherPayload = ({ date, temperature, atmosphere }) => ({
  date,
  temperature,
  atmosphere,
  dayName: getDayNameFromDate(new Date(date))
});
