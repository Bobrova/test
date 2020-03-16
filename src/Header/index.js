import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import memesLogo from '../img/memes-logo.svg';
import exitIcon from '../img/exit-icon.svg';
import avatar from '../img/sponge.jpg';
import './style.css';

class Header extends Component {
  render() {
    // const { userName, iconUser } = this.props;
    return (
    <div className='header'>
      <Link to={'/gallery'} className='link'>
        <div className='logoMemes' style={{ backgroundImage: `url("${memesLogo}")`}} />
      </Link>
      <div className='profileData'>
        <div className='profileData_user'>
          <div className='userAvatar' style={{ backgroundImage: `url("${avatar}")`}}/>
          <span className='userName'>Губка Боб Квадратные штаны</span></div>
          <Link to={'/'} className='link'>
            <div className='profileData_exit' style={{ backgroundImage: `url("${exitIcon}")`}} />
          </Link>
      </div>
    </div>
    );
  }
  
}

export default Header;
