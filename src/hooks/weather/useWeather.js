import { useDispatch, useSelector } from 'react-redux';
import { getWeatherSelector as selector } from 'state/weather/selectors';
import { ADD_WEATHER_DAY as action } from 'constants/actions';

const EMPTY_ARRAY = [];
const useWeather = ({ consumer = true } = {}) => {
  const dispatch = useDispatch();
  const data = consumer ? useSelector(selector) : EMPTY_ARRAY;

  const add = (payload) => dispatch({ type: action, payload });

  return { add, data };
};
export default useWeather;
