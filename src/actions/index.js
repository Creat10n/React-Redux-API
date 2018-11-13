import actionTypes from "./actionTypes";

export const handleInput = event => {
  return {
    type: actionTypes.GET_INPUT,
    payload: event.target.value
  };
};

export const handleCurrentWeather = event => {
  return {
    type: actionTypes.GET_CURRENT_WEATHER
  };
};
