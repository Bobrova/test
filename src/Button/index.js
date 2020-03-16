import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({ textButton, icon }) => {
  console.log(icon);
  return (
    <div className='mainButton'>
      <div
        className='icon'
        style={{ backgroundImage: `URL("${icon}")` }}
      />
      <span className='textButton'>{textButton}</span>
    </div>
  );
};

Button.propTypes = {
  textButton: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Button;
