import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Header from '../Header';
import MemesList from '../MemesList';
// import FilterPerson from '../FilterPerson';
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
          {/* <FilterPerson /> */}
          </div>
          <MemesList />
          <div className='buttonsBlock'>
            <Link to={'/main/create-meme'} className='link'><Button
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
