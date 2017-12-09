import React from 'react';
import Banner from './components/banner';
import Main from './components/main';

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Get in Touch',
      content:
      <div meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
      khalid khalil, nick doman, jordan matthews, start-up">
        <p>
          Please reach out if you would like to know more about us.
        </p>
        <p>
          contact@redgoldcapital.co.uk
        </p>
        <p>
          +44 (0) 7444 719 538
        </p>
      </div> ,
      image: <img alt="" src={ require('./pictures/Contact.jpg') } meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
      khalid khalil, nick doman, jordan matthews, start-up" />
    }
  }

  render() {
    return (
      <div className="Contact" meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
      khalid khalil, nick doman, jordan matthews, start-up">
        <Banner photo={ this.state.image } />
        <Main content={ this.state.content } title={ this.state.title }/>
      </div>);
  }
}
