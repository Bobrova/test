import React, { Component } from 'react';
import memesLogo from './img/memes-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="page">
        <div className='memesLogo' style={{ backgroundImage: `url("${memesLogo}")`}} />
          <div className='login-block'>
            <div className='topText'>Log in to work with memes</div>   
          </div>
      </div>
    );
  }
  
}

export default App;
