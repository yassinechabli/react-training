import { ADD_WEATHER_DAY, LOAD_WEATHERS } from 'constants/actions';
import { getActionTypes } from 'utils/actions';

const initialState = {
  isLoading: false,
  isLoaded: false,
  data: [],
  error: undefined
};

export default function (state = initialState, action) {
  const addActions = getActionTypes(ADD_WEATHER_DAY);
  const loadActions = getActionTypes(LOAD_WEATHERS);

  switch (action.type) {
    case addActions.begin:
      return { ...state, isLoading: true, isLoaded: false };
    case addActions.success:
      return { ...state, isLoading: false, isLoaded: true, data: [...state.data, action.payload] };

    case loadActions.begin:
      return { ...state, isLoading: true, isLoaded: false };
    case loadActions.success:
      return { ...state, isLoading: false, isLoaded: true, data: action.payload };
    case loadActions.error:
      return { ...state, isLoading: false, isLoaded: true, error: action.payload };

    default:
      return state;
  }
}
