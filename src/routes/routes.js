import NoMatchPage from 'pages/NoMatchPage';
import WeatherPage from 'pages/WeatherPage';

const routes = [
  {
    path: '/',
    Component: WeatherPage
  },
  {
    path: '*',
    Component: NoMatchPage
  }
];

export default routes;
