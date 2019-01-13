import React, { Component } from 'react';
import './Weather.css';

class Weather extends React.Component {

  // constructor(props) {
  //   super(props);
  //   this.weatherIcon = {
  // }

  componentDidMount() {
  }

  render() {
    const currentWeather = "Clear";
    const currentTemp = 18;
    const currentCOR = 10;
    return (
      <div className = "Weather">
        <div className = "Current">
        <div className = "DayWeather">
          <div className = "Icon">
            <img src={`Icons/${currentWeather}.svg`} />
          </div>
          <div className = "ChanceOfRain">
            {currentCOR}%
          </div>
        </div>
          <div className = "DayTemp">
            {currentTemp}°
          </div>
        </div>
        <divider />
        <div className = "FutureWeather">
        </div>
      </div>
    );
  }
}

export default Weather;