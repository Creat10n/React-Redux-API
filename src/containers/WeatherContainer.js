import { connect } from "react-redux";
import * as actions from "../actions";

import Weather from "../components/Weather";

const mapStateToProps = state => {
  return {
    cityName: state.weather.cityName,
    clouds: state.weather.clouds
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleInput: event => {
      dispatch(actions.handleInput(event));
    },
    handleCurrentWeather: event => {
      dispatch(actions.handleCurrentWeather(event));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Weather);
