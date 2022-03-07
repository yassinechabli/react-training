import Card from 'components/wheather/Card';
import { weekWeatherData } from 'mocks/weather';
import React from 'react';
import renderer from 'react-test-renderer';

it('renders correctly when data is given', () => {
  const tree = renderer.create(<Card weekWeather={weekWeatherData} />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('renders correctly when data is empty', () => {
  const tree = renderer.create(<Card weekWeather={[]} />).toJSON();
  expect(tree).toMatchSnapshot();
});
