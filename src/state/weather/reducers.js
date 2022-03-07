import { ADD_WEATHER_DAY } from 'constants/actions';
import { getActionTypes } from 'utils/actions';

const initialState = {
  isLoading: false,
  isLoaded: false,
  data: []
};

export default function (state = initialState, action) {
  const actions = getActionTypes(ADD_WEATHER_DAY);
  switch (action.type) {
    case actions.begin:
      return { ...state, isLoading: true, isLoaded: false };
    case actions.success:
      return { ...state, isLoading: false, isLoaded: true, data: [...state.data, action.payload] };
    default:
      return state;
  }
}
