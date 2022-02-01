import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './RegPhotos.scss';

const RegPhotos = ({handleAdd}) => {

  const navigate = useNavigate();

  const [photos, setPhotos] = useState({photos: []})
  const [photoSelect, setPhotoSelect] = useState()

  const photosDisplay = photos.photos.map((photo, index) => {
    let url = URL.createObjectURL(photo)
    return (
      <div className='photo' key={index} >
        <img src={url} className='photo' />
      </div>
    )
  })


  const handleChange = (event) => {
    event.preventDefault()
    setPhotoSelect(event.target.files[0])

  }

  const handleUpload = (event) => {
    event.preventDefault();
    setPhotos({photos: [...photos.photos, photoSelect ]})

  }

  

  const handleContinue = (event) => {
    event.preventDefault();
    handleAdd(photos)
    navigate('../myBasics')
  }

  return (
    <div className='photos-reg'>
      {/* <img alt='photos icon'/> */}
      <h1>Add Photos here!</h1>
      {photosDisplay}
      <form onSubmit={handleContinue}>
        <input
          type='file'
          accept='image/*'
          className='photo-select'
          onChange={handleChange}
          alt='file selector for photos'
        />
        <input
          type='button'
          className='photo-upload'
          value='Upload'
          onClick={handleUpload}
          alt='upload photo'
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