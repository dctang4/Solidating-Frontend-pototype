import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './RegInterest.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RegInterest = ({handleAdd}) => {

  const navigate = useNavigate();

  const [interest, setInterest] = useState({interest: ''})
  const [bgColor, setBgColor] = useState({Men: 'white', Women: 'white', Everyone: 'white'})

  const defaultBgColor = {Men: 'white', Women: 'white', Everyone: 'white'}

  const handleClick = (event) => {

    setInterest({interest: event.target.value})

    setBgColor({...defaultBgColor, [event.target.value]: 'yellow'})
  }
  const handleContinue = (event) => {
    event.preventDefault();
    handleAdd(interest)
    navigate('../location')
  }

  return (
    <div className='interest-reg'>
      {/* <img alt='bubble with question mark icon'/> */}
      <FontAwesomeIcon 
        icon={['far', 'question-circle']} 
        className='interest-icon icon'
        alt='interest icon'
      />
      <h1 className='signup-header'>Who are you interested in?</h1>
      <form onSubmit={handleContinue}>
        <input
          type='button'
          className='interest-btn'
          value='Men'
          onClick={handleClick}
          style={{backgroundColor: bgColor.Men}}
          alt='button for interested in men'
        />
        <input
          type='button'
          className='interest-btn'
          value='Women'
          onClick={handleClick}
          style={{backgroundColor: bgColor.Women}}
          alt='button for interested in women'
        />
        <input
          type='button'
          className='interest-btn'
          value='Everyone'
          onClick={handleClick}
          style={{backgroundColor: bgColor.Everyone}}
          alt='button interest in everyone'
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

export default RegInterest;