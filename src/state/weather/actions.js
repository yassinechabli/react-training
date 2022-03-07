import { ADD_WEATHER_DAY } from 'constants/actions';
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
