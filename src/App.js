import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from './Button';
import memesLogo from './img/memes-logo.png';
import slackLogo from './img/slack-logo.png';
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
          <Link to={'/main'} className='link'>
            <Button textButton="Sign in with Slack" icon={slackLogo} />
          </Link>
        </div>
      </div>
    );
  }
  
}

export default App;
