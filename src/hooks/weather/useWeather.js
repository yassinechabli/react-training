import { useDispatch, useSelector } from 'react-redux';
import { getWeatherSelector as selector } from 'state/weather/selectors';
import { addWeather, loadWeather } from 'state/weather/actions';

const EMPTY_ARRAY = [];
const useWeather = ({ consumer = true } = {}) => {
  const dispatch = useDispatch();
  const { data, isLoading, isLoaded } = consumer ? useSelector(selector) : EMPTY_ARRAY;

  const add = (payload) => dispatch(addWeather(payload));
  const load = () => dispatch(loadWeather());
  return { add, load, data, isLoading, isLoaded };
};

export default useWeather;
