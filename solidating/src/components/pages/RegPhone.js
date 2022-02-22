import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './RegPhone.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RegPhone = ({handleAdd}) => {

  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState({
    phone: {countryCode: '1', number: ''}
  });

  const handleChange = (event) => {

    if(event.target.name === 'countryCode' && event.target.value === '') {
      setPhoneNumber({
        phone: {...phoneNumber.phone, countryCode: '1'}
      })
    } else {
      setPhoneNumber({
        phone: {...phoneNumber.phone, [event.target.name]: event.target.value}
      })
    }
    
  }
  const handleContinue = (event) => {
    event.preventDefault();
    handleAdd(phoneNumber)
    navigate('/name')
  }

  return (
    <div className='phone-reg'>
      {/* <img alt='phone number icon'/> */}
      <FontAwesomeIcon 
        icon={['fas', 'phone-square']}
        className='phoneNumber-icon icon'
        alt='phone number icon'
      />
      <h1 className='signup-header'>What's your phone number?</h1>
      <form onSubmit={handleContinue}>
        <input
          type='tel'
          className='country-code'
          name='countryCode'
          placeholder='+1'
          value={phoneNumber.phone.countrycode}
          onChange={handleChange}
          alt='country code'
        />
        <input
          type='tel'
          className='phone-number'
          name='number'
          placeholder='Phone Number'
          onChange={handleChange}
          alt='phone number'
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

export default RegPhone;