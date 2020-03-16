import React, { Component } from 'react';
import Meme from '../Meme';
import { memesList } from '../constants';
import './style.css';

class MemesList extends Component {
  render() {
    const list = memesList.map(item => (
      <Meme 
        key={item.id}
      />
    ));
    return (
      <div className="memesList">
        {list}
      </div>
    );
  }
  
}

export default MemesList;
