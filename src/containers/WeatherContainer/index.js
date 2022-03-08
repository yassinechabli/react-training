import { calculatePredictionForCurrentWeek } from 'containers/WeatherContainer/utils';
import View from 'containers/WeatherContainer/view';
import useWeather from 'hooks/weather/useWeather';
import { useCallback, useState } from 'react';

const WeatherContainer = () => {
  const [count, setCount] = useState(0);
  const predictionRatio = calculatePredictionForCurrentWeek(count);

  const handleButtonClick = useCallback(() => {
    setCount(count + 1);
  }, []);

  const handleOnselectWeatherDay = (data) => {
    console.log('selected date weather', data);
  };
  console.log('render controller weather');
  const { data } = useWeather({ lazy: false, resetOnUnmount: true });
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col">
            <button onClick={handleButtonClick}>send analytics</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="alert alert-info">{predictionRatio}</div>
          </div>
        </div>
      </div>

      <View data={data} onselectWeatherDay={handleOnselectWeatherDay} />
    </>
  );
};

export default WeatherContainer;
