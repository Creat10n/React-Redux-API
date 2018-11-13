import React, { Component } from "react";
import WeatherContainer from "./containers/WeatherContainer";

class App extends Component {
  render() {
    return (
      // <div>
      //   <button
      //     onClick={() => {
      //       getCurrentWeather("St. George").then(res => console.log(res));
      //     }}
      //     className="btn btn-primary"
      //   >
      //     Get Current Weather
      //   </button>
      // </div>

      <WeatherContainer />
    );
  }
}

export default App;
