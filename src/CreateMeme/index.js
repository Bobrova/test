import React, { Component } from 'react';
import Header from '../Header';
import MemesList from '../MemesList';
import FilterPerson from '../FilterPerson';
import ButtonsChainCreateMeme from '../ButtonsChainCreateMeme';
import './style.css';

class CreateMeme extends Component {
  render() {
    return (
      <div className="mainPage">
        <Header />
        <div className='mainContent'>
          <div className='filterPeople'>
          <FilterPerson />
          </div>
          <MemesList />
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

export default CreateMeme;
