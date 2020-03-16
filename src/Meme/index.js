import React, { Component } from 'react';
import meme from '../img/pen.png';
import share from '../img/share-icon.svg';
import './style.css';

class Meme extends Component {
  render() {
    return (
      <div className="meme" style={{ backgroundImage: `url("${meme}")`}} >
        <div className='share' style={{ backgroundImage: `url("${share}")`}} />
      </div>
    );
  }
  
}

export default Meme;
