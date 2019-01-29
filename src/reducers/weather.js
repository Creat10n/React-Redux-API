import actionTypes from '../actions/actionTypes'

const initialState = {
  name: 'St. George',
}

const handleInput = (state, action) => {
  return Object.assign({}, state, {
    name: action.payload,
  })
}

const handleCurrentWeather = (state, action) => {
  return Object.assign({}, state, {
    longtitude: action.payload.longtitude,
    latitude: action.payload.latitude,
    temp: action.payload.temp,
    pressure: action.payload.pressure,
    humidity: action.payload.humidity,
    clouds: action.payload.clouds,
  })
}

const weather = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_INPUT:
      return handleInput(state, action)
    case actionTypes.GET_CURRENT_WEATHER:
      return handleCurrentWeather(state, action)
    default:
      return state
  }
}

export default weather
