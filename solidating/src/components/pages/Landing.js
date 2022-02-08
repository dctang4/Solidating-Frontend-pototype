import React from 'react';
import {Link} from 'react-router-dom';
import './Landing.scss';

const Landing = (props) => {

  return (
    <div className='landing'>
      {/* <img alt='solidating logo'/> */}
      <h1>solidating</h1>
      <h2>WELCOME</h2>
      <button>
        <Link to='login'>Let's Get Started!</Link>
      </button>
    </div>
  )
  
}

export default Landing;