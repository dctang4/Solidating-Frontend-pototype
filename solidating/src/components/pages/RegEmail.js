import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './RegEmail.scss';

const RegEmail = ({handleAdd}) => {

  const [name, setName] = useState({
    name: {firstName: '', lastName: ''}
  })

  const handleChange = (event) => {

    if (event.target.className === 'first-name') {
      setName({
        name: {...name.name, firstName: event.target.value},
      })
    }
    else {
      setName({
        name: {...name.name, lastName: event.target.value},
      })
    }
    
  }
  const handleContinue = (event) => {
    event.preventDefault();
    handleAdd(name)
  }

  return (
    <div className='email-reg'>
      {/* <img alt='email icon'/> */}
      <h1>What's your email?</h1>
      <form>
        <input
          type='text'
          className='email'
          placeholder='email@example.com'
          value={name.name.firstName}
          onChange={handleChange}
          alt='country code'
        />
        <button 
          className='continue-Bt'
          onClick={handleContinue}
        >
          <Link to='../email'>Continue</Link>
        </button>
      </form>
      
    </div>
  )

}

export default RegEmail;