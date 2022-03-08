import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getWeatherSelector as selector } from 'state/weather/selectors';
import { addWeather, loadWeather, resetWeathers as reset } from 'state/weather/actions';

const EMPTY_ARRAY = [];
const useWeather = ({ consumer = true, lazy = true, deps, resetOnUnmount } = {}) => {
  const dispatch = useDispatch();
  const { data, isLoading, isLoaded } = consumer ? useSelector(selector) : EMPTY_ARRAY;

  useEffect(() => {
    if (!lazy && data.length === 0) {
      load();
    }
    return () => {
      if (resetOnUnmount) {
        dispatch(reset());
      }
    };
  }, [lazy, deps]);

  const add = (payload) => dispatch(addWeather(payload));
  const load = () => dispatch(loadWeather());
  return { add, load, data, isLoading, isLoaded };
};

export default useWeather;
