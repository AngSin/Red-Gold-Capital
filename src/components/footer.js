import React from 'react';
import './headerNfooter.css';
var Link = require('react-router-dom').Link;

export default class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className="footer">
          <div className="written">
            <div className='copyrights'> &copy; 2017 Red Gold Capital </div>
            <div className='social'>
              <Link target="_blank" title="Our AngelList"
                to="https://angel.co/red-gold-capital">
              <img className="logo" alt="Angel"
                src={ require('../pictures/angel-white.png') }/>
              </Link>
              <Link target="_blank" title="Our LinkedIn"
                to="https://www.linkedin.com/company-beta/11217583/">
              <img className="logo" alt="LinkedIn"
                src={ require('../pictures/linkedin-white.png') }/>
              </Link>
              <Link target="_blank" title="Our Twitter"
                to="https://twitter.com/RedGold_Capital">
              <img className="logo" alt="Twitter"
                src={ require('../pictures/twitter-white.gif') }/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
