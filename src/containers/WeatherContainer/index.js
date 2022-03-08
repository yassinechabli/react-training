import WeatherCard from 'components/wheather/Card';
import useWeather from 'hooks/weather/useWeather';
import { useEffect } from 'react';

const WeatherContainer = () => {
  const handleOnselectWeatherDate = (data) => {
    console.log('selected date weather', data);
  };
  const { data, load } = useWeather();

  useEffect(() => {
    load();
    console.log('useffect');
  }, []);

  console.log('renders');

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
