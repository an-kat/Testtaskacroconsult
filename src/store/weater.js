const initialState = {
  weather: {},
  error: false,
  isLoading: true,
  cityName: '',
};

const SET_CITY = 'SET_CITY';
const SET_WEATHER = 'weather/SET_WEATHER';
const SET_LOADING = 'SET_LOADING';
const SET_ERROR = 'SET_ERROR';

export const actions = {
  setWeather: (weather) => ({
    type: SET_WEATHER,
    payload: weather,
  }),
  setError: (value) => ({
    type: SET_ERROR,
    payload: value,
  }),
  setLoading: (value) => ({
    type: SET_LOADING,
    payload: value,
  }),
  setCityName: (value) => ({
    type: SET_CITY,
    payload: value,
  }),
};

export const selectors = {
  getWeather: state => state.weather,
  getError: state => state.error,
  getIsLoading: state => state.isLoading,
  getCity: state => state.cityName,
};

export default (state = initialState, actions) => {
  switch (actions.type) {
    case SET_WEATHER:
      return {
        ...state,
        weather: actions.payload,
      };
    case SET_CITY:
      return {
        ...state,
        cityName: actions.payload,
      };
    case SET_LOADING:
      return {
        ...state,
        isLoading: actions.payload,
      };
    case SET_ERROR:
      return {
        ...state,
        error: actions.payload,
      };
    default:
      return state;
  };
};
