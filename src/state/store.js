import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import weatherState from 'state/weather/reducers';

const rootReducer = combineReducers({
  weatherState
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
  : compose;

function configureStore(preloadedState) {
  const middleware = [];
  return createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(...middleware)));
}

const store = configureStore();

export default store;