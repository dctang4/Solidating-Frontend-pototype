import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './RegName.scss';

const RegName = ({handleAdd}) => {

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
    <div className='name-reg'>
      {/* <img alt='text bar icon'/> */}
      <h1>What's your name?</h1>
      <form>
        <input
          type='text'
          className='first-name'
          placeholder='First Name'
          value={name.name.firstName}
          onChange={handleChange}
          alt='country code'
        />
        <input
          type='text'
          className='last-name'
          placeholder='Last Name'
          value={name.name.lastName}
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

export default RegName;