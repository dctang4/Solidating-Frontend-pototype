import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './RegLocation.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RegLocation = ({handleAdd}) => {

  const navigate = useNavigate();

  const [location, setLocation] = useState({location: ''})

  const handleChange = (event) => {

    setLocation({location: event.target.value})

  }
  const handleContinue = (event) => {
    event.preventDefault();
    handleAdd(location)
    navigate('../passions')
  }

  return (
    <div className='location-reg'>
      {/* <img alt='location icon'/> */}
      <FontAwesomeIcon 
        icon={['fas', 'map-marker-alt']}
        className='location-icon icon'
        alt='location icon'
      />
      <h1 className='signup-header'>What's your location?</h1>
      <form onSubmit={handleContinue}>
        {/* <input
          type='button'
          className='location-btn'
          placeholder='Enable Location Services'
          onClick={handleClick}
          alt='enable location services button'
        /> */}
        <input
          type='text'
          className='loaction'
          name='location'
          placeholder='Enter Location Manually'
          value={location.location}
          onChange={handleChange}
          alt='input for your location'
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

export default RegLocation;