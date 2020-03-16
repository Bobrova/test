import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
            <div className='signInButton'>
              <div
                className='slackIcon'
                style={{ backgroundImage: `URL("${slackLogo}")` }}
              />
              <span className='textsignInButton'>Sign in with Slack</span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
  
}

export default App;
