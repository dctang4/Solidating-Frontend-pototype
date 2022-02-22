import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './RegEmail.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RegEmail = ({handleAdd}) => {

  const navigate = useNavigate();

  const [email, setEmail] = useState({email: ''})

  const handleChange = (event) => {

    setEmail({[event.target.name]: event.target.value})

    
  }
  const handleContinue = (event) => {
    event.preventDefault();
    handleAdd(email)
    navigate('../birthdate')
  }

  return (
    <div className='email-reg'>

      <FontAwesomeIcon 
        icon={['far', 'envelope' ]}
        className='email-icon icon'
        alt='email icon'
      />
      <h1 className='signup-header'>What's your email?</h1>
      <form onSubmit={handleContinue}>
        <input
          type='email'
          className='email'
          name='email'
          placeholder='email@example.com'
          value={email.email}
          onChange={handleChange}
          alt='email'
        />
        <input 
          type='submit'
          className='continue-btn'
          value='Continue'
          alt='Continue button'
        />
      </form>
      
    </div>
  )

}

export default RegEmail;