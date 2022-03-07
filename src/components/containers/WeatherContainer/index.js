import WeatherCard from "components/wheather/Card";
import {weekWeatherData} from "mocks/weather";


const WeatherContainer = () => {
    const handleOnselectWeatherDate = (data) => {
        console.log("selected date weather", data);
    }
    return(<>
        <WeatherCard weekWeather={weekWeatherData} onSelectDateWeather={handleOnselectWeatherDate}/>
    </>);
}

export default WeatherContainer;