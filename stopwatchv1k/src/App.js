import React, { Component } from 'react';
import { Button } from 'reactstrap';
import watch from './watch1.jpeg';
import './App.css';
// import moment from 'moment';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      runningTime: 0,
      status: false
    }
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  handleClick = () => {
    this.setState( state => {
      if (state.status) {
        clearInterval(this.timer);
      }
      else {
        const startTime = Date.now() - this.state.runningTime;
        this.timer = setInterval(() => {
          this.setState({
            // runningTime: moment(Date.now() - startTime).format('hh:mm:ss')
            runningTime: Date.now() - startTime
          });
        });
      }
      return { status: !state.status };
    }); 
  }

  handleReset = () => {
    clearInterval(this.timer);
    this.setState({
      runningTime: 0,
      status: false
    });
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={watch} className="App-logo" alt="logo" />
          <p>
            Stoper
          </p>
          <p>{this.state.runningTime}</p>
          <div className="manage-container">
            <Button className="start-button" onClick={this.handleClick}>
              START
            </Button>
            <Button className="reset-button" onClick={this.handleReset}>
              RESET
            </Button>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
