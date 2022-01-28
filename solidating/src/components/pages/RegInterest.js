import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './RegInterest.scss';

const RegInterest = ({handleAdd}) => {

  const navigate = useNavigate();

  const [interest, setInterest] = useState({interest: ''})

  const handleClick = (event) => {

    setInterest({interest: event.target.value})

  }
  const handleContinue = (event) => {
    event.preventDefault();
    handleAdd(interest)
    navigate('../location')
  }

  return (
    <div className='interest-reg'>
      {/* <img alt='bubble with question mark icon'/> */}
      <h1>Who are you interested in?</h1>
      <form onSubmit={handleContinue}>
        <input
          type='button'
          className='interest-btn'
          value='Men'
          onClick={handleClick}
          alt='button for interested in men'
        />
        <input
          type='button'
          className='interest-btn'
          value='Women'
          onClick={handleClick}
          alt='button for interested in women'
        />
        <input
          type='button'
          className='interest-btn'
          value='Everyone'
          onClick={handleClick}
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