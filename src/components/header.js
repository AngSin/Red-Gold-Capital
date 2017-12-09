import React from 'react';
import './headerNfooter.css';
var NavLink = require('react-router-dom').NavLink;

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      logo: <img alt="" className="logo" src={ require('../pictures/RGC.png')} />
    }
  }

  render() {
    return (
      <div className="header">
        <div className="Logo"> <NavLink exact to="/">{ this.state.logo }</NavLink> </div>
        <h1><NavLink exact to="/">Red Gold Capital</NavLink></h1>
      </div>
    );
  }
}
