import React from 'react';
import '../index.css';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class Profile extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      content: null,
      profStyle: {
        display: 'none',
      },
      titleStyle: {
        color: 'rgb(198, 48, 44)'
      }
    }
  }
  showBio() {
    this.setState({
      content: this.props.bio,
      profStyle: {
        display: 'block',
      }
    });
  }
  render() {
    return (
      <ReactCSSTransitionGroup
      transitionName="fade"
      transitionAppear={true}
      transitionAppearTimeout={1000}
      transitionEnter={false}
      transitionLeave={false}>
        <div className="main">
          <div className="info" onClick={ this.showBio.bind(this) }>
            { this.props.image }
            <h3 style={ this.state.titleStyle }>{ this.props.title }</h3>
            <p>{ this.props.link }</p>
            <p>{ this.props.email }</p>
          </div>
          <ReactCSSTransitionGroup
          transitionName = "carousel"
          transitionEnterTimeout = {1500}
          transitionLeaveTimeout = {2900}>
          <div className="content" id='prof-content' key={ this.state.content } style={this.state.profStyle}>
            { this.state.content }
          </div>
        </ReactCSSTransitionGroup>
        </div>
      </ReactCSSTransitionGroup>
    );
  }
}
