import React, { Component } from 'react';
import {Grid, List, Progress, Divider, Checkbox} from 'semantic-ui-react'
import './App.css';
class App extends Component {
  buildLinks(activityName, activityProgress) {
    return <List.Item key={activityName}>
      {activityName}
      <Progress percent={activityProgress} progress/> 
    </List.Item> 
  }
  render() {
    return (
      <div className="App">
        <Grid container columns={1} stackable>
        <Grid.Column>
        <Divider />
        <h1>To do this week</h1>
        <div className="ToDo">
        <div className="Item">
          <div className="Checkbox">
            <input type="checkbox" name="Washing" />
            <label> Washing</label>
          </div>
        </div>
        <div className="Item">
          <div className="Checkbox">
            <input type="checkbox" name="Pay rent" />
            <label> Pay rent</label>
          </div>
        </div>
        <div className="Item">
          <div className="Checkbox">
            <input type="checkbox" name="Shave" />
            <label> Shave</label>
          </div>
        </div>
        </div>
        <Divider />
        <h1>Long-term goals</h1>
        <div className="Goals">
        <div className="Item">
          <div className="Checkbox">
            <input type="checkbox" name="Write a song" />
            <label> Write</label>
          </div>
        </div>
        </div>
        <Divider />
        <div className="Random">
          <label> Random act of kindness <Checkbox toggle/> </label>
        </div>
        <Divider />
        <h1>Challenges this week</h1>
        <div className="Challenges">
          <List>
          {this.buildLinks('Exercise',44)}
          {this.buildLinks('Music',20)}
          </List>
        </div>
        </Grid.Column>
        </Grid>
        <Divider />
        <Grid container columns={2} stackable>
        <Grid.Column>
        <h1>Naughty things to avoid</h1>
        
        </Grid.Column>
        </Grid>
      </div>
    );
  }
}

export default App;
