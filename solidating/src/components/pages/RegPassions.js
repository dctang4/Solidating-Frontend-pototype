import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RegPassions.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RegPassions = ({ handleAdd }) => {
  const navigate = useNavigate();

  const [passions, setPassions] = useState({ passions: [] });

  const handleClick = (event) => {
    event.preventDefault();
    if (passions.passions.filter((passion) => passion === event.target.name).length > 0) {
      const newPassions = passions.passions.filter(
        (passion) => passion !== event.target.name
      );
      setPassions({ passions: [...newPassions] });
    } else {
      setPassions({ passions: [...passions.passions, event.target.name] });
    }

  };
  const handleContinue = (event) => {
    event.preventDefault();
    handleAdd(passions);
    navigate('../photos');
  };

  return (
    <div className='passions-reg'>
      <FontAwesomeIcon 
        icon={['fas', 'icons']}
        className='passion-icon icon'
        alt='passion icon'
      />
      <h1 className='signup-header'>Who are you passionate in?</h1>
      <form>
        <button
          className='passions-btn'
          name='exercise'
          onClick={handleClick}
          alt='exercise'
        >
          <FontAwesomeIcon icon={['fas', 'dumbbell']} />
        </button>
        <br />

        <button
          className='passions-btn'
          name='coffee'
          onClick={handleClick}
          alt='coffee'
        >
          <FontAwesomeIcon icon={['fas', 'coffee']} />
        </button>
        <br />

        <button
          className='passions-btn'
          name='hot tub'
          onClick={handleClick}
          alt='hot tub'
        >
          <FontAwesomeIcon icon={['fas', 'hot-tub']} />
        </button>
        <br />

        <button
          className='passions-btn'
          name='golf'
          onClick={handleClick}
          alt='golf'
        >
          <FontAwesomeIcon icon={['fas', 'golf-ball']} />
        </button>
        <br />

        <button
          className='passions-btn'
          name='studying'
          onClick={handleClick}
          alt='studying'
        >
          <FontAwesomeIcon icon={['fas', 'graduation-cap']} />
        </button>
        <br />

        <button
          className='passions-btn'
          name='swimming'
          onClick={handleClick}
          alt='swimming'
        >
          <FontAwesomeIcon icon={['fas', 'swimming-pool']} />
        </button>
        <br />

        <button
          className='passions-btn'
          name='mobile phone'
          onClick={handleClick}
          alt='mobile phone'
        >
          <FontAwesomeIcon icon={['fas', 'mobile-alt']} />
        </button>
        <br />

        <button
          className='passions-btn'
          name='driving'
          onClick={handleClick}
          alt='driving'
        >
          <FontAwesomeIcon icon={['fas', 'car']} />
        </button>
        <br />

        <button
          className='passions-btn'
          name='biking'
          onClick={handleClick}
          alt='biking'
        >
          <FontAwesomeIcon icon={['fas', 'biking']} />
        </button>
        <br />

        <button
          className='passions-btn'
          name='painting'
          onClick={handleClick}
          alt='painting'
        >
          <FontAwesomeIcon icon={['fas', 'paint-brush']} />
        </button>
        <br />

        <button
          className='passions-btn'
          name='traveling'
          onClick={handleClick}
          alt='traveling'
        >
          <FontAwesomeIcon icon={['fas', 'plane']} />
        </button>
        <br />

        <button
          className='passions-btn'
          name='eating'
          onClick={handleClick}
          alt='eating'
        >
          <FontAwesomeIcon icon={['fas', 'utensils']} />
        </button>
        <br />

        <input 
          type='submit'
          className='continue-Bt'
          value='Continue'
          onClick={handleContinue}
          alt='Continue button'
        />

      </form>
    </div>
  );
};

export default RegPassions;
