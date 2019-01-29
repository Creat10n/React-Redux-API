import React from 'react'

const Weather = props => {
  return (
    <React.Fragment>
      <input onChange={props.handleInput} type='text' />
      <button onClick={() => props.getCurrentWeather(props.name)}>Get Current Weather</button>

      <table>
        <tbody>
          <tr>
            <th>City Name: </th>
            <td>{props.name}</td>
          </tr>
          <tr>
            <th>Longtitude: </th>
            <td>{props.longtitude}</td>
          </tr>
          <tr>
            <th>Latitude: </th>
            <td>{props.latitude}</td>
          </tr>
          <tr>
            <th>Temperature: </th>
            <td>{props.temp}</td>
          </tr>
          <tr>
            <th>Pressure: </th>
            <td>{props.pressure}</td>
          </tr>
          <tr>
            <th>Humidity: </th>
            <td>{props.humidity}</td>
          </tr>
          <tr>
            <th>Clouds: </th>
            <td>{props.clouds}</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  )
}

export default Weather
