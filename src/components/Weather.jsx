import React from "react";

const Weather = props => {
  return (
    <React.Fragment>
      <input onChange={props.handleInput} type="text" />
      <button onClick={props.handleCurrentWeather}>Get Current Weather</button>
      <div>{props.cityName}</div>
    </React.Fragment>
  );
};

export default Weather;
