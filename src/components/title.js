import React from 'react';
import './title.css';

export default class Title extends React.Component {
    render() {
    return (
      <div className="title">
        <h2>{ this.props.title }</h2>
      </div>
    );
  }
}
