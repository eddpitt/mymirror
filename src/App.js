import React, { Component } from 'react';
import {Grid, List, Progress, Divider, Checkbox} from 'semantic-ui-react'
import Clock from "./Clock.js"
import Weather from "./Weather.js"
import './App.css';

class App extends Component {

  buildProgressBar(activityName, activityProgress) {
    return ( 
    <List.Item key={activityName}>
      <div className="progressBar">
      {activityName}
      <Progress percent={activityProgress} progress/> 
      </div>
    </List.Item> )
  }

  buildToDo(thing) {
    return (  <div className="Item">
               <Checkbox label={thing} />
              </div>)
  }

  render() {
    return (
      <div className="App">
        <div className="leftColumn Column">
         <Clock /> 
            <Divider />
              <h1>To do this week</h1>
              <div className="header">
                {this.buildToDo('Sniff some socks')}
              </div>
              <Divider />
              <h1>Long-term goals</h1>
              <div className="header">
                {this.buildToDo('Write a song')}
              </div>
            <Divider />
            <h1>Challenges this week</h1>
            <div className="Challenges">
              <List>
              {this.buildProgressBar('Exercise',44)}
              {this.buildProgressBar('Music',20)}
              </List>
            </div>
          <Divider />
              <h1>Naughty things to avoid</h1>
        </div>
        <div className="middleColumn  Column"> 
          <div className="Random">
            <label> Random act of kindness <Checkbox toggle/> </label>
          </div>
        </div>
        <div className="rightColumn  Column"> 
          <Weather />
        </div>
      </div> 
    );
  }
}

export default App;
