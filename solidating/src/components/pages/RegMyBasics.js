import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegMyBasics.scss';

const RegMyBasics = ({ handleAdd }) => {
  const navigate = useNavigate();

  const [myBasics, setMyBasics] = useState({
    myBasics: {
      height: '',
      weight: '',
      drinkingHabbits: '',
      smokingHabits: '',
      fitness: '',
      vaccination: '',
      matchRadius: '',
    },
  });

  const handleChange = (event) => {
    setMyBasics({
      myBasics: { ...myBasics.myBasics, [event.target.name]: event.target.value },
    });
  };
  const handleContinue = (event) => {
    event.preventDefault();
    handleAdd(myBasics);
    navigate('../avoidContacts');
  };

  return (
    <div className='myBasics-reg'>
      {/* <img alt='profile icon'/> */}
      <h1>My Basics</h1>
      <form onSubmit={handleContinue}>
        <input
          type='text'
          className='height'
          name='height'
          placeholder='Height'
          value={myBasics.myBasics.height}
          onChange={handleChange}
          alt='height'
        />
        <input
          type='text'
          className='weight'
          name='weight'
          placeholder='Weight'
          value={myBasics.myBasics.weight}
          onChange={handleChange}
          alt='weight'
        />
        <input
          type='text'
          className='drinking-habits'
          name='drinkingHabits'
          placeholder='Drinking Habits'
          value={myBasics.myBasics.drinkingHabbits}
          onChange={handleChange}
          alt='drinking habits'
        />
        <input
          type='text'
          className='smoking-habits'
          name='smokingHabits'
          placeholder='Smoking Habits'
          value={myBasics.myBasics.smokingHabits}
          onChange={handleChange}
          alt='smoking habits'
        />
        <input
          type='text'
          className='fitness'
          name='fitness'
          placeholder='Fitness'
          value={myBasics.myBasics.fitness}
          onChange={handleChange}
          alt='fitness'
        />
        <input
          type='text'
          className='vaccination'
          name='vaccination'
          placeholder='Vaccination'
          value={myBasics.myBasics.vaccination}
          onChange={handleChange}
          alt='vaccination'
        />
        <input
          type='text'
          className='match-radius'
          name='matchRadius'
          placeholder='Match Radius'
          value={myBasics.myBasics.matchRadius}
          onChange={handleChange}
          alt='match radius'
        />
        <input
          type='submit'
          className='continue-Bt'
          value='Continue'
          alt='Continue button'
        />
      </form>
    </div>
  );
};

export default RegMyBasics;
