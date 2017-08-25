import React, { Component } from 'react';
import logo from './andrew.png';
import './App.css';


class Title extends Component {
  render() {
    return (
      <div className="pure-g title">
        <div className="pure-u-1 pure-u-md-10-24">
          <img src={logo} alt="Andrew Hagner" className="pure-img" />
        </div>
        <div className="pure-u-1 pure-u-md-14-24 title-text">
          <h1>Andrew Hagner</h1>
          <span>Technology, Architecture, and Logistics Consulting</span>
        </div>
      </div>
    );
  }
}

export default Title;
