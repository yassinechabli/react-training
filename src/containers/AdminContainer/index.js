import useWeather from 'hooks/weather/useWeather';
import { useState } from 'react';
import { formatDate } from 'utils/dates';

const AdminContainer = () => {
  const [date, setDate] = useState(formatDate(new Date()));
  const [temperature, setTemperature] = useState('15');
  const [atmosphere, setAtmosphere] = useState('Sunny');

  const [error, setError] = useState(false);

  if (error) throw new Error('News error!');

  const { isLoading, isLoaded } = useWeather();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError(true);

    //addWeather(buildDayWeatherPayload({ date, temperature, atmosphere }));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="container mt-5">
          <div className="row">
            <div className="col">
              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  date
                </span>
                <input
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  type="date"
                  className="form-control"
                  placeholder="date"
                  aria-label="date"
                  role="date"
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                  temperature
                </span>
                <input
                  value={temperature}
                  onChange={(e) => setTemperature(e.target.value)}
                  type="number"
                  className="form-control"
                  placeholder="temperature"
                  aria-label="temperature"
                  role="temperature"
                />
              </div>

              <div className="input-group mb-3">
                <select
                  role="atmosphere"
                  className="form-select"
                  aria-label="atmosphere"
                  value={atmosphere}
                  onChange={(e) => {
                    setAtmosphere(e.target.value);
                  }}
                >
                  <option value="Sunny">Sunny</option>
                  <option value="Rainy">Rainy</option>
                  <option value="Snowy">Snowy</option>
                  <option value="Cloudy">Cloudy</option>
                </select>
              </div>
              <button
                role="submit"
                type="submit"
                className="btn btn-info"
                disabled={!date || !atmosphere || !temperature}
              >
                Ajouter
              </button>

              {isLoading && (
                <div className="alert alert-secondary mt-5" role="alert">
                  Ajout en cours
                </div>
              )}

              {isLoaded && (
                <div className="alert alert-primary mt-5" role="alert">
                  Ajout réussi
                </div>
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AdminContainer;
