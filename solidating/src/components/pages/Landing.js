import React from 'react';
import {Link} from 'react-router-dom';
import './Landing.scss';

const Landing = (props) => {

  return (
    <div className='landing'>
      {/* <img alt='solidating logo'/> */}
      <h1>Solidating</h1>
      <button>
        <Link to='login'>Let's Get Started!</Link>
      </button>
    </div>
  )
  
}

export default Landing;