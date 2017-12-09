import React from 'react';
import '../index.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Main extends React.Component {
  render() {
      return (
        <ReactCSSTransitionGroup
        transitionName="fade"
        transitionAppear={true}
        transitionAppearTimeout={1000}
        transitionEnter={false}
        transitionLeave={false}>
          <div className="main">
            <h2>{ this.props.title }</h2>
            <p>{ this.props.content }</p>
            <p>{ this.props.profile }</p>
          </div>
        </ReactCSSTransitionGroup>
      )
  }
}
