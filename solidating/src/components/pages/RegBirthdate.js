import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './RegBirthdate.scss';

const RegBirthdate = ({handleAdd}) => {

  const navigate = useNavigate();

  const [birthdate, setBirthdate] = useState({birthdate: ''})

  // const [birthdate, setBirthdate] = useState({birthdate: {day: '', month: '', year: ''}})

  const handleChange = (event) => {

    setBirthdate({
      birthdate: {...birthdate.birthdate, [event.target.name]: event.target.value}
    })

    
  }
  const handleContinue = (event) => {
    event.preventDefault();
    handleAdd(birthdate)
    navigate('../gender')
  }

  return (
    <div className='birthdate-reg'>
      {/* <img alt='calender icon'/> */}
      <h1>What's your Birthdate?</h1>
      <form onSubmit={handleContinue}>
        <input
          type='date'
          className='birthdate'
          name='birthdate'
          // value={birthdate.birthdate}
          onChange={handleChange}
          alt='birthdate'
        />
        {/* <input
          type='number'
          className='day'
          name='day'
          placeholder='day'
          value={birthdate.birthdate.day}
          onChange={handleChange}
          alt='day of birth'
        />
        <input
          type='number'
          className='month'
          name='month'
          placeholder='month'
          value={birthdate.birthdate.month}
          onChange={handleChange}
          alt='month of birth'
        />
        <input
          type='number'
          className='year'
          name='year'
          placeholder='year'
          value={birthdate.birthdate.year}
          onChange={handleChange}
          alt='year of birth'
        /> */}
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

export default RegBirthdate;