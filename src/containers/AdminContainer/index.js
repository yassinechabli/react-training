import { ADD_WEATHER_DAY } from 'constants/actions';
import { buildDayWeatherPayload } from 'containers/AdminContainer/utils';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { formatDate } from 'utils/dates';

const AdminContainer = () => {
  const [date, setDate] = useState(formatDate(new Date()));
  const [temperature, setTemperature] = useState('15');
  const [atmosphere, setAtmosphere] = useState('Sunny');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_WEATHER_DAY,
      payload: buildDayWeatherPayload({ date, temperature, atmosphere })
    });
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
                />
              </div>

              <div className="input-group mb-3">
                <select
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
                type="submit"
                className="btn btn-info"
                disabled={!date || !atmosphere || !temperature}
              >
                Ajouter
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default AdminContainer;