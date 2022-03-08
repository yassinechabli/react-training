import { ADD_WEATHER_DAY, LOAD_WEATHERS } from 'constants/actions';
import { getActionTypes } from 'utils/actions';

export const addWeather = (data) => (dispatch) => {
  const actions = getActionTypes(ADD_WEATHER_DAY);
  dispatch({ type: actions.begin });

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
      dispatch({ type: actions.success, payload: data });
    }, 3000);
  });
};

export const loadWeather = () => (dispatch) => {
  const actions = getActionTypes(LOAD_WEATHERS);
  dispatch({ type: actions.begin });
  return fetch('http://localhost:8080/weathers')
    .then((res) => res.json())
    .then((res) => {
      dispatch({ type: actions.success, payload: res });
    })
    .catch((e) => {
      dispatch({ type: actions.error, payload: e });
    });
};

export const resetWeathers = () => (dispatch) => {
  const actions = getActionTypes(LOAD_WEATHERS);
  dispatch({ type: actions.reset });
};
