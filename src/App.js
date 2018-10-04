import React, { Component } from "react";
import { getCurrentWeather } from "./utils/api";

class App extends Component {
  render() {
    return (
      <div>
        <button
          onClick={() => {
            getCurrentWeather("St. George").then(res => console.log(res));
          }}
          className="btn btn-primary"
        >
          Get Current Weather
        </button>
      </div>
    );
  }
}

export default App;
