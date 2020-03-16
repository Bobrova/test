import React, { Component } from 'react';
import memesLogo from '../img/memes-logo.png';
import exitIcon from '../img/exit.png';
import avatar from '../img/sponge.jpg';
import './style.css';

class Header extends Component {
  render() {
    // const { userName, iconUser } = this.props;
    return (
    <div className='header'>
      <div className='logoMemes' style={{ backgroundImage: `url("${memesLogo}")`}} />
      <div className='profileData'>
        <div className='profileData_user'>
          <div className='userAvatar' style={{ backgroundImage: `url("${avatar}")`}}/>
          <span className='userName'>Губка Боб Квадратные штаны</span></div>
        <div className='profileData_exit' style={{ backgroundImage: `url("${exitIcon}")`}} />
      </div>
    </div>
    );
  }
  
}

export default Header;
