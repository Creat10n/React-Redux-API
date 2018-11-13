import actionTypes from "../actions/actionTypes";
import { getCurrentWeather } from "../utils/api";

const initialState = {
  cityName: "St. George",
  clouds: ""
};

const handleInput = (state, action) => {
  return Object.assign({}, state, {
    cityName: action.payload
  });
};

const handleCurrentWeather = (state, action) => {
  getCurrentWeather(state.cityName).then(res => {});

  return Object.assign({}, state, {
    clouds: ""
  });
};

const weather = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_INPUT:
      return handleInput(state, action);
    case actionTypes.GET_CURRENT_WEATHER:
      return handleCurrentWeather(state, action);
    default:
      return state;
  }
};

export default weather;
