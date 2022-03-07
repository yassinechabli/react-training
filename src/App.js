import 'assets/css/App.css';
import logo from 'assets/images/logo.jpeg';
import WeatherContainer from 'components/containers/WeatherContainer';

function App() {
  return (
    <div className="App">
      <img src={logo} className="logo" />
      <WeatherContainer />
    </div>
  );
}

export default App;
