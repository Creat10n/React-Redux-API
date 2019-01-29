import axios from 'axios'

import actionTypes from './actionTypes'
import { prepUrl, getQueryStringData } from '../utils/api'

export const handleInput = event => {
  return {
    type: actionTypes.GET_INPUT,
    payload: event.target.value,
  }
}

export const handleCurrentWeather = response => {
  const { clouds, coord, main } = response.data
  return {
    type: actionTypes.GET_CURRENT_WEATHER,
    payload: {
      longtitude: coord.lon,
      latitude: coord.lat,
      temp: main.temp,
      pressure: main.pressure,
      humidity: main.humidity,
      clouds: clouds.all,
    },
  }
}

export const getCurrentWeather = city_name => {
  const queryStringData = getQueryStringData(city_name)
  const url = prepUrl('weather', queryStringData)

  return dispatch => {
    axios.get(url).then(response => {
      dispatch(handleCurrentWeather(response))
    }).catch(error => {
      console.log(error.message)
    })
  }
}
