import React from 'react';
import {Link} from 'react-router-dom';
import './Login.scss';

const Login = (props) => {

  return (
    <div className='login'>
      {/* <img alt='solidating logo'/> */}
      <h1>solidating</h1>
      <button>
        <Link to='phone'>Login</Link>
      </button>
      <button>
        <Link to='../phone'>Signup</Link>
      </button>
    </div>
  )

}

export default Login;