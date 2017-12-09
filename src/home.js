import React from 'react';
import Banner from './components/banner';
import Main from './components/main';

export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content:
      <div meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
      khalid khalil, nick doman, jordan matthews, start-up">
        <p>
          Red Gold Capital (RGC) is a private investment firm that seeks to acquire, manage, and grow a family owned business with £10-20m in annual revenue.
        </p>
        <p>
          We are a hungry and aggressive <i>Entrepreneurship Through Acquisition</i> firm, looking to acquire a company in a highly fragmented industry that is subject to consolidation through tenacious M&A.
        </p>
        <p>
          RGC is currently assembling a board of advisers who will collectively have expertise spanning corporate finance, corporate law, accountancy and M&A.
        </p>
        <p>
          We are also looking for talented and hardworking individuals to join our growing team of analysts here at Red Gold Capital. Our analysts are heavily involved in all aspects of the firm’s operations, and we are offering a unique opportunity to gain comprehensive experience in Private Equity.
        </p>
        <p>
          Please do not hesitate to contact us if you are interested in either of these opportunities.
        </p>
      </div>,
      title : 'About Us',
      image: <img alt="" className="banner" src={ require('./pictures/Thames.png')}
      meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
      khalid khalil, nick doman, jordan matthews, start-up" />
    }
  }

  render() {
    return (
      <div className='Home' meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
      khalid khalil, nick doman, jordan matthews, start-up">
        <Banner photo={ this.state.image }/>
        <Main title={ this.state.title } content={ this.state.content } />
      </div>
    );
  }
}
