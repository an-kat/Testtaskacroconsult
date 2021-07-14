import { createStore,
  combineReducers,
  applyMiddleware } from 'redux';
import { getWeather } from '../api/api';
import thunk from 'redux-thunk';

import weatherReduser, {
  selectors as weatherSelectors,
  actions as weatherActions,
} from './weater';

export const selectors =  {
  getWeather: state => weatherSelectors.getWeather(state.weather),
  getError: state => weatherSelectors.getError(state.weather),
  getIsLoading: state => weatherSelectors.getIsLoading(state.weather),
  getCity: state => weatherSelectors.getCity(state.weather),
}

export const actions = {
  infoFromServer: (city) => {
    return async (dispatch) => {
      dispatch(weatherActions.setLoading(true));
      dispatch(weatherActions.setCityName(city));

      try {
        const response = await getWeather(city);
        if(response.ok) {
          const result = await response.json();
          dispatch(weatherActions.setError(false));
          dispatch(weatherActions.setWeather(result));
          dispatch(weatherActions.setLoading(false));
          return;
        };

        dispatch(weatherActions.setError(true));
        return dispatch(weatherActions.setWeather({}));
      } catch (error) {

      };
    };
  },
};

const reducer = combineReducers({
  weather: weatherReduser,
});


const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
