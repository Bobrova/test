import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import memesLogo from './img/memes-logo.svg';
import slackLogo from './img/slack-icon.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='page'>
        <div
          className='memesLogo'
          style={{ backgroundImage: `URL("${memesLogo}")` }}
        />
        <div className='loginBlock'>
          <div className='topText'>Log in to work with memes</div>
          <Link to={'/gallery'} className='link'>
            <Button textButton="Sign in with Slack" icon={slackLogo} />
          </Link>
        </div>
      </div>
    );
  }
  
}

export default App;
