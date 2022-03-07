import 'assets/css/App.css';
import Card from "components/wheather/Card";
import logo from "assets/images/logo.jpeg";
import {weekWeatherData} from "mocks/weather";

function App() {
  return (
    <div className="App">
      <img src={logo} className="logo"/>
    <Card weekWeather={weekWeatherData}/>
    </div>
  );
}

export default App;
