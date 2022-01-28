import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './RegGender.scss';

const RegGender = ({handleAdd}) => {

  const navigate = useNavigate();

  const [gender, setGender] = useState({gender: ''})

  const handleClick = (event) => {

    setGender({gender: event.target.value})

    
  }
  const handleContinue = (event) => {
    event.preventDefault();
    handleAdd(gender)
    navigate('../interest')
  }

  return (
    <div className='gender-reg'>
      {/* <img alt='gender icon'/> */}
      <h1>What's your Gender?</h1>
      <form onSubmit={handleContinue}>
        <input
          type='button'
          className='gender-btn'
          value='Man'
          onClick={handleClick}
          alt='button for gender man'
        />
        <input
          type='button'
          className='gender-btn'
          value='Woman'
          onClick={handleClick}
          alt='button for gender woman'
        />
        <input
          type='button'
          className='gender-btn'
          value='More'
          onClick={handleClick}
          alt='button for more genders'
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

export default RegGender;