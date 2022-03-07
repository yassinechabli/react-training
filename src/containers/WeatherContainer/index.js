import WeatherCard from 'components/wheather/Card';
import { useSelector } from 'react-redux';
import { getWeatherSelector } from 'state/weather/selectors';

const WeatherContainer = () => {
  const handleOnselectWeatherDate = (data) => {
    console.log('selected date weather', data);
  };
  const data = useSelector(getWeatherSelector);
  return (
    <>
      {data.length > 0 ? (
        <WeatherCard weekWeather={data} onSelectDateWeather={handleOnselectWeatherDate} />
      ) : (
        <div className="container mt-5">
          <div className="row  align-items-center">
            <div className="col">
              <p> pas de données disponibles</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default WeatherContainer;
