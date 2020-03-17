import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Button from '../Button';
import iconSpy from '../img/spy-icon.svg';
import iconDance from '../img/dance-icon.svg';
import iconLol from '../img/lol-icon.svg';
import iconTriangle from '../img/triangle-icon.svg';
import './style.css';

const ButtonsChainCreateMeme = ({ btnPage1, btnPage2, btnPage3 }) => {
  return (
    <div className='buttonsBlockCreateMeme'>    
      <Link to={'/main/create-meme-page1'} className='link'>
        <Button
          textButton='Choose person'
          icon={iconSpy}
          btnPage={btnPage1}
      />
      </Link>
      <div className='triangleIcon' style={{ backgroundImage: `URL("${iconTriangle}")` }} />
      <Link to={'/main/create-meme-page2'} className='link'><Button
          textButton='Create memes'
          icon={iconDance}
          btnPage={btnPage2}
        />
      </Link>
      <div className='triangleIcon' style={{ backgroundImage: `URL("${iconTriangle}")` }} />
      <Link to={'/main/create-meme-page3'} className='link'><Button
          textButton='Share memes'
          icon={iconLol}
          btnPage={btnPage3}
        />
      </Link>
  </div>
  );
};

Button.propTypes = {
  btnPage1: PropTypes.bool.isRequired,
  btnPage2: PropTypes.bool.isRequired,
  btnPage3: PropTypes.bool.isRequired,
};

export default ButtonsChainCreateMeme;
