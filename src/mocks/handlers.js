import { weekWeatherData } from 'mocks/weather';
import { rest } from 'msw';
export const handlers = [
  rest.get('http://localhost:8080/weathers', (req, res, context) => {
    return res(context.status(200), context.json(weekWeatherData));
  })
];
