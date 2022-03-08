import WeatherCard from 'components/wheather/Card';
import PropTypes from 'prop-types';
import React from 'react';

const View = ({ data, onselectWeatherDay }) => {
  console.log('render view weather');
  return (
    <>
      {data.length > 0 ? (
        <WeatherCard weekWeather={data} onSelectDateWeather={onselectWeatherDay} />
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

View.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onselectWeatherDay: PropTypes.func.isRequired
};
export default React.memo(View);
