import React, { Component } from "react";
import Weather from "./components/Weather";

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
      <Weather city="St. George" />
    );
  }
}

export default App;
