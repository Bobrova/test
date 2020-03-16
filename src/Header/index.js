import React, { Component } from 'react';
import memesLogo from '../img/memes-logo.png';
import exitIcon from '../img/exit.png';
import './style.css';

class Header extends Component {
  render() {
    // const { userName, iconUser } = this.props;
    return (
    <div className='header'>
      <div className='logoMemes' style={{ backgroundImage: `url("${memesLogo}")`}} />
      <div className='profileData'>
        <div className='profileData_user'>Губка Боб Квадратные штаны</div>
        <div className='profileData_exit' style={{ backgroundImage: `url("${exitIcon}")`}} />
      </div>
    </div>
    );
  }
  
}

export default Header;
