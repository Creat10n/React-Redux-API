import { connect } from 'react-redux'
import * as actions from '../actions'

import Weather from '../components/Weather'

const mapStateToProps = state => {
  return {
    name: state.weather.name,
    longtitude: state.weather.longtitude,
    latitude: state.weather.latitude,
    temp: state.weather.temp,
    pressure: state.weather.pressure,
    humidity: state.weather.humidity,
    clouds: state.weather.clouds,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    handleInput: event => {
      dispatch(actions.handleInput(event))
    },
    getCurrentWeather: name => {
      dispatch(actions.getCurrentWeather(name))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather)
