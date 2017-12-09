import React from 'react';
import './nav.css';

var NavLink = require('react-router-dom').NavLink;

export default class Nav extends React.Component{
  handleClick() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
  }

  render() {
    return (
      <div className="topnav" id="myTopnav">
        <NavLink exact activeClassName='active' to="/">Home </NavLink>
        <NavLink activeClassName="active" to="/criteria">Investment Criteria </NavLink>
        <NavLink activeClassName="active" to="/applications">Applications </NavLink>
        <NavLink activeClassName="active" to="/team">Meet the Team </NavLink>
        <NavLink activeClassName="active" to="/contact">Contact Us</NavLink>
        <a className="icon" onClick={ this.handleClick }>&#9776;</a>
      </div>
    );
  }
}
