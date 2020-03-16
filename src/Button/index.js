import React, { Component } from 'react';
import './style.css';

class Button extends Component {
  render() {
    const { textButton, logo } = this.props;
    return (
    <div className="mainButton">
      <div className='slack-icon' style={{ backgroundImage: `url("${logo}")`}} />
      <span className="textButton">{textButton}</span>
      </div>
    );
  }
  
}

export default Button;
