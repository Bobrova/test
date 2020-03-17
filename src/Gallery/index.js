import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Header from '../Header';
import MemeList from '../MemeList';
import FilterPerson from '../FilterPerson';
import iconDog from '../img/dog-icon.svg';
import './style.css';

class Main extends Component {
  render() {
    return (
      <>
      <div className="mainPage">
        <Header />
        <div className='mainContent'>
          <div className='filterPeople'>
          <FilterPerson />
          </div>
          <MemeList />
          <div className='buttonsBlock'>
            <Link to={'/create-meme-page1'} className='link'><Button
                textButton='Create new memas'
                icon={iconDog}
              />
            </Link>
          </div>
        </div>
      </div>
      </>
    );
  }
  
}

export default Main;
