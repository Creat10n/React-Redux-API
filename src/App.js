import React, { Component } from "react";
import { getCurrentWeather, getForcast } from "./utils/api";

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
          Click
        </button>
      </div>
    );
  }
}

export default App;
