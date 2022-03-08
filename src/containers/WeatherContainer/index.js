import WeatherCard from 'components/wheather/Card';
import useWeather from 'hooks/weather/useWeather';

const WeatherContainer = () => {
  const handleOnselectWeatherDate = (data) => {
    console.log('selected date weather', data);
  };
  const { data } = useWeather({ lazy: false, resetOnUnmount: true });
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
