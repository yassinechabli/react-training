import Card from 'components/wheather/Card';
import React from 'react';
import renderer from 'react-test-renderer';
import { getWeekDates } from 'utils/dates';

const mockData = getWeekDates().map((date) => ({
  ...date.dayName,
  date: '12/12/2012',
  temperature: 15,
  atmosphere: 'Sunny'
}));

it('renders correctly when data is given', () => {
  const tree = renderer.create(<Card weekWeather={mockData} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when data is empty', () => {
  const tree = renderer.create(<Card weekWeather={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
