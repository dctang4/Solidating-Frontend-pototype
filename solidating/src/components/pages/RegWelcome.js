import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './RegWelcome.scss';

const RegWelcome = ({userInfo}) => {
  return (
    <div className='welcome-page'>
      <h1>Welcome {userInfo.name.firstName} {userInfo.name.lastName}</h1>
      <h2>Let's find your dates!</h2>
      <h1>&hearts;</h1>
    </div>
  )
}

export default RegWelcome;