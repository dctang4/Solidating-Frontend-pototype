import React from 'react';
import {Link} from 'react-router-dom';
import './Login.scss';

const Login = (props) => {

  return (
    <div className='login'>
      {/* <img alt='solidating logo'/> */}
      <h1>solidating</h1>
      <Link to='phone'>
        <button>Login</button>
      </Link>
      
      <Link to='../phone'>
        <button>Signup</button>
      </Link>
      
    </div>
  )

}

export default Login;