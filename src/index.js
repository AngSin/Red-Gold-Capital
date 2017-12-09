import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './components/header';
import Nav from './components/Nav';
import Footer from './components/footer';

import Home from './home';
import Applications from './applications';
import Meet from './team';
import Contact from './contact';
import Criteria from './criteria';

var ReactRouter = require('react-router-dom');
var Router = ReactRouter.BrowserRouter;
var Route = ReactRouter.Route;

export default class Layout extends React.Component {

  render() {
    return (
      <Router>
        <div className="Layout" meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
        khalid khalil, nick doman, jordan matthews, start-up">
          <Header />
          <Nav />
          <Route exact path="/" component={ Home } />
          <Route path="/applications" component={ Applications } />
          <Route path="/team" component={ Meet } />
          <Route path="/contact" component={ Contact } />
          <Route path="/criteria" component={ Criteria } />
          <Footer />
        </div>
      </Router>
    );
  }
}



ReactDOM.render(<Layout />, document.getElementById('root'));
