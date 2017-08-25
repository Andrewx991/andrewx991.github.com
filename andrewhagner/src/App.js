import React, { Component } from 'react';
import logo from './andrew.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <div className="pure-g">
          <div className="Nav pure-u-1 pure-u-md-1-4">
              Andrew Hagner <br/>
              <img src={logo} />
          </div>
          <div className="Content pure-u-1 pure-u-md-3-4">
              Software Developer
          </div>
        </div>
      </div>
    );
  }
}

export default App;
