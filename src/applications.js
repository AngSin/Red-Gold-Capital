import React from 'react';
import Banner from './components/banner';
import Main from './components/main';


export default class Applications extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content:
      <div>
        <p>
          Red Gold Capital is offering a 3-month Business Analyst Internship to intelligent and resourceful individuals who have a keen interest in Private Equity.
        </p>
        <p>
          The first order of business is to identify key target industries, carry out due diligence, assemble a Board of Directors and write the Private Placement Memorandum.
        </p>
        <p>
          Once complete, you will also be actively involved in the deal making process, from reaching out to investors, to organising and attending meetings with accountants and corporate lawyers.
        </p>
        <p>
          Please bear in mind due to the early nature of the firm, this is an unpaid internship, however the environment of a start-up provides an unrivalled opportunity to expand one’s skill-set and to gain experience across all the processes within Private Equity.
        </p>
        <p>
          To apply please send your CV and Cover Letter over to contact@redgoldcapital.co.uk
        </p>
      </div>,
      title: 'Applications',
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
