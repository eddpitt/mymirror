import React, { Component } from 'react';
import './Clock.css';

class Clock extends React.Component {

  constructor(props) {
    super(props);
    this.weekday = [
      "Sunday","Monday","Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
      ];
    this.month = [
    "January","February","March","April","May","June","July","August","September","October","November","December"
      ];  
    this.state = {
      time: new Date()
    };
  }

  componentDidMount() {
    this.intervalID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.intervalID);
  }

  tick() {
    this.setState({
      time: new Date()
    });
  }

  padNumber(number) {
    let toPrint = number.toString();
    if (toPrint.length== 1) {
      return "0" + toPrint;
    } else {
      return toPrint;
    }
  }

  render() {
    const time = this.state.time;
    return (
      <div className="Clock">
        <div className="Time">
          {this.padNumber(time.getHours())}<div className="Colon">:</div>{this.padNumber(time.getMinutes())}
        </div>
        <div className="Date">
          {this.weekday[time.getDay()]} {time.getDate()} {this.month[time.getMonth()]}
        </div>
      </div>
    );
  }
}

export default Clock;