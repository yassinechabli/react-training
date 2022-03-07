import AdminPage from 'pages/Admin';
import NoMatchPage from 'pages/NoMatchPage';
import WeatherPage from 'pages/WeatherPage';

const routes = [
  {
    path: '/',
    Component: WeatherPage
  },

  {
    path: '/admin',
    Component: AdminPage
  },
  {
    path: '*',
    Component: NoMatchPage
  }
];

export default routes;
