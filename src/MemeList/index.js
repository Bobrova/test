import React, { Component } from 'react';
import Meme from '../Meme';
import { memeList } from '../constants';
import './style.css';

class MemeList extends Component {
  render() {
    const list = memeList.map(item => (
      <Meme 
        key={item.id}
      />
    ));
    return (
      <div className="memeList">
        {list}
      </div>
    );
  }
  
}

export default MemeList;
