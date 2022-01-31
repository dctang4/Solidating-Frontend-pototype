import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './RegPhotos.scss';

const RegPhotos = ({handleAdd}) => {

  const navigate = useNavigate();

  const [photos, setPhotos] = useState({photos: ''})

  const handleChange = (event) => {

    setPhotos({photos: event.target.value})

  }
  const handleContinue = (event) => {
    event.preventDefault();
    handleAdd(photos)
    navigate('../mybasics')
  }

  return (
    <div className='photos-reg'>
      {/* <img alt='photos icon'/> */}
      <h1>What's your photos?</h1>
      <form onSubmit={handleContinue}>
        <input
          type='text'
          className='loaction'
          name='photos'
          placeholder='Enter photos Manually'
          value={photos.photos}
          onChange={handleChange}
          alt='input for your photos'
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

export default RegPhotos;