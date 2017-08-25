import React, { Component } from 'react';
import logo from './andrew.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="pure-g title">
          <div className="pure-u-1 pure-u-md-1-2">
              <img src={logo} alt="Andrew Hagner" className="pure-img img-center"/>
          </div>
          <div className="pure-u-1 pure-u-md-1-2 text-center">
            <h1 style={{marginBottom: '0.25em'}}>Andrew Hagner</h1>
            <span>Technology, Architecture, and Logistics Consulting</span>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
