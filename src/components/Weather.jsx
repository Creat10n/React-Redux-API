import React, { Component } from "react";
import { getCurrentWeather } from "../utils/api";

class Weather extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      clouds: ""
    };
  }

  handleCurrentWeather = () => {
    getCurrentWeather(this.props.city)
      .then(res => {
        console.log("res", res);
        return res;
      })
      .then(response => {
        console.log("response", response);
        const { name, clouds } = response;
        this.setState({
          name: name,
          clouds: clouds.all
        });
      });
  };

  render() {
    return (
      <React.Fragment>
        <button onClick={this.handleCurrentWeather}>Get Current Weather</button>
        <div>{this.state.name}</div>
        <div>{this.state.clouds}</div>
      </React.Fragment>
    );
  }
}

export default Weather;
