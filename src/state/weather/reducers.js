import { ADD_WEATHER_DAY } from 'constants/actions';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_WEATHER_DAY:
      return [...state, action.payload];
    default:
      return state;
  }
}
