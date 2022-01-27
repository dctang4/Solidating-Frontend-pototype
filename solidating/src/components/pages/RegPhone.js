import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import './RegPhone.scss';

const RegPhone = ({handleAdd}) => {

  const [phoneNumber, setPhoneNumber] = useState({
    phone: {countryCode: '1', phoneNumber: ''}
  });

  const handleChange = (event) => {

    if (event.target.className === 'country-code') {
      setPhoneNumber({
        phone: {...phoneNumber.phone, countryCode: event.target.value},
      })
    }
    else {
      setPhoneNumber({
        phone: {...phoneNumber.phone, phoneNumber: event.target.value},
      })
    }
    
  }
  const handleContinue = (event) => {
    event.preventDefault();
    handleAdd(phoneNumber)
  }

  return (
    <div className='phone-reg'>
      {/* <img alt='phone number icon'/> */}
      <h1>What's your phone number?</h1>
      <form>
        <input
          type='tel'
          className='country-code'
          placeholder='+1'
          value={phoneNumber.phone.countrycode}
          onChange={handleChange}
          alt='country code'
        />
        <input
          type='tel'
          className='phone-number'
          placeholder='Phone Number'
          onChange={handleChange}
          alt='country code'
        />
        <button 
          className='continue-Bt'
          onClick={handleContinue}
        >
          <Link to='../name'>Continue</Link>
        </button>
      </form>
      
    </div>
  )

}

export default RegPhone;