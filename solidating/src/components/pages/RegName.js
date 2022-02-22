import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './RegName.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RegName = ({handleAdd}) => {

  const navigate = useNavigate();

  const [name, setName] = useState({
    name: {firstName: '', lastName: ''}
  })

  const handleChange = (event) => {

    setName({
      name: {...name.name, [event.target.name]: event.target.value}
    })
    
  }
  const handleContinue = (event) => {
    event.preventDefault();
    handleAdd(name)
    navigate('../email')
  }

  return (
    <div className='name-reg'>
      <FontAwesomeIcon 
        icon={['far', 'user' ]}
        className='name-icon icon'
        alt='name icon'
      />
      <h1 className='signup-header'>What's your name?</h1>
      <form onSubmit={handleContinue}>
        <input
          type='text'
          className='first-name'
          name='firstName'
          placeholder='First Name'
          value={name.name.firstName}
          onChange={handleChange}
          alt='first name'
        />
        <input
          type='text'
          className='last-name'
          name='lastName'
          placeholder='Last Name'
          value={name.name.lastName}
          onChange={handleChange}
          alt='last name'
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

export default RegName;