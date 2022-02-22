import React from 'react';
import {Link} from 'react-router-dom';
import './Landing.scss';

const Landing = (props) => {

  return (
    <div className='landing'>
      {/* <img alt='solidating logo'/> */}
      <h1>solidating</h1>
      <h2>WELCOME</h2>
      <Link to='login'>
        <button>Let's Get Started!</button>
      </Link>
      
    </div>
  )
  
}

export default Landing;