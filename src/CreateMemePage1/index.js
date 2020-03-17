import React, { Component } from 'react';
import Header from '../Header';
// import MemeList from '../MemeList';
import FilterPerson from '../FilterPerson';
import ButtonsChainCreateMeme from '../ButtonsChainCreateMeme';
import PatternList from '../PatternList';
import './style.css';

class CreateMemePage1 extends Component {
  render() {
    return (
      <div className="mainPage">
        <Header />
        <div className='mainContent'>
          <div className='filterPeople'>
          <FilterPerson />
          </div>
          <PatternList />
          <ButtonsChainCreateMeme 
            btnPage1={true}
            btnPage2={false}
            btnPage3={false}
          />
        </div>
      </div>
    );
  }
  
}

export default CreateMemePage1;
