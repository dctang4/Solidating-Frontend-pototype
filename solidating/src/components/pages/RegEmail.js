import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './RegEmail.scss';

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
      {/* <img alt='email icon'/> */}
      <h1>What's your email?</h1>
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
          className='continue-Bt'
          value='Continue'
          alt='Continue button'
        />
      </form>
      
    </div>
  )

}

export default RegEmail;