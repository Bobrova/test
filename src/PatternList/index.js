import React, { Component } from 'react';
import Meme from '../Meme';
import iconBtnAdd from '../img/add-button-icon.svg';
import { memeList } from '../constants';

import './style.css';

class PatternList extends Component {
  render() {
    const list = memeList.map(item => (
      <Meme 
        key={item.id}
      />
    ));
    return (
      <div className="patternList">
        {list}
        <div className="plus">
          <div className="plusWrapper" style={{ backgroundImage: `URL("${iconBtnAdd}")` }}></div>
        </div>
      </div>
    );
  }
  
}

export default PatternList;
