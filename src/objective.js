import React from 'react';
import Banner from './components/banner';
import Main from './components/main';

export default class Vision extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Objective',
      content:<div meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
      khalid khalil, nick doman, jordan matthews, start-up">
              <p>
                Our mission is to streamline business practises whilst generating shareholder value.
              </p>
              <p>
                We help family-owned firms with no succession plan by acquiring their business, growing the firm, and maintaining their core values.
              </p>
              <p>
                Our team is seeking to invest in a small and mid-sized profitable UK-based company with stable recurring revenue and EBITDA of between £0.5 - £1.0 Million.
              </p>
            </div>,
      image: <img alt="" className="banner" src={ require('./pictures/Rocket.jpg')} meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
      khalid khalil, nick doman, jordan matthews, start-up"/>
    }
  }

  render() {
    return (
      <div className="vision" meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
      khalid khalil, nick doman, jordan matthews, start-up">
        <Banner photo={ this.state.image } />
        <Main title={ this.state.title } content={ this.state.content }/>
      </div>
    );
  }
}
