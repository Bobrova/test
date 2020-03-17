import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Button = ({ textButton, icon }) => {
  return (
    <div className='mainButton'>
      <div
        className='iconbt'
        style={{ backgroundImage: `URL("${icon}")` }}
      />
      <span className='textButton'>{textButton}</span>
    </div>
  );
};

Button.propTypes = {
  textButton: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
  btnPage1: PropTypes.bool,
  btnPage2: PropTypes.bool,
  btnPage3: PropTypes.bool,
};

Button.defaultProps = {
  btnPage1: false,
  btnPage2: false,
  btnPage3: false,
};

export default Button;
