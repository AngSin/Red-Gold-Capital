import React from 'react';
import Banner from './components/banner';
import Main from './components/main';

export default class Criteria extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: 'Investment Criteria',
      content:
      <table>
        <tr>
          <td>
            <ul>
              <lh className="lh" meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
              khalid khalil, nick doman, jordan matthews, start-up">Business Characteristics</lh>
              <li>Simple operation</li>
              <li>Values aligned with Red Gold Capital</li>
              <li>Recurring revenue model</li>
              <li>Strong management team</li>
              <li>Low capital expenditure</li>
            </ul>
          </td>
          <td>
            <ul>
              <lh className="lh" meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
              khalid khalil, nick doman, jordan matthews, start-up">Industry Characteristics</lh>
              <li>Fragmented</li>
              <li>Growing industry</li>
              <li>Early stage of growth</li>
              <li>No regulatory or technological risk</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <ul>
              <lh className="lh" meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
              khalid khalil, nick doman, jordan matthews, start-up">Owner Situation</lh>
              <li>Owner at or near retirement with no succession plans</li>
              <li>Owner looking to pursue  other entrepreneurial ventures</li>
              <li>Owner who want to step back from day to day operation</li>
            </ul>
          </td>
          <td>
            <ul>
              <lh className="lh" meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
              khalid khalil, nick doman, jordan matthews, start-up">Financial Criteria</lh>
              <li>Annual revenue between £10M and £20M </li>
              <li>Attractive gross margin (20%)</li>
              <li>History of profitability and cash flow</li>
              <li>Strong Balance Sheet</li>
            </ul>
          </td>
        </tr>
      </table>,
      image: <img alt="" src={ require('./pictures/Checklist.jpg') } meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
      khalid khalil, nick doman, jordan matthews, start-up" />
    }
  }

  render() {
    return (
      <div class='Criteria' meta name="keywords" content="Red Gold Capital, redgoldcapital, redgold capital, redgold, private equity search fund,
      khalid khalil, nick doman, jordan matthews, start-up">
        <Banner photo={ this.state.image }/>
        <Main title={ this.state.title } content={ this.state.content } />
      </div>
    );
  }
}
