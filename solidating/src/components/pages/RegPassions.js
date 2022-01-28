import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './RegPassions.scss';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RegPassions = ({handleAdd}) => {

  const navigate = useNavigate();

  const [passions, setPassions] = useState({passions: []})

  const handleClick = (event) => {

    if(passions.passions.filter((passion) => passion === event.target.name).length > 0) {
      const newPassions = passions.passions.filter((passion) => passion !== event.target.name)
      setPassions({passions: newPassions})
    } else {
      setPassions({passions: [...passions.passions, event.target.name]})
    }
    

  }
  const handleContinue = (event) => {
    event.preventDefault();
    handleAdd(passions)
    navigate('../photos')
  }

  return (
    <div className='passions-reg'>
      <h1>Who are you passionsed in?</h1>
      <section>
        <FontAwesomeIcon icon={['fas', 'dumbbell']}/> 
        <br/>
        <FontAwesomeIcon icon={['fas', 'coffee']}/> 
        <br/>
        <FontAwesomeIcon icon={['fas', 'hot-tub']}/> 
        <br/>
        <FontAwesomeIcon icon={['fas', 'golf-ball']}/> 
        <br/>
        <FontAwesomeIcon icon={['fas', 'graduation-cap']}/> 
        <br/>
        <FontAwesomeIcon icon={['fas', 'mobile-alt']}/> 
        <br/>
        <FontAwesomeIcon icon={['fas', 'biking']}/> 
        <br/>
        <FontAwesomeIcon icon={['fas', 'paint-brush']}/> 
        <br/>
        <FontAwesomeIcon icon={['fas', 'plane']}/> 
        <br/>
        <FontAwesomeIcon icon={['fas', 'utensils']}/> 
        <br/>
      </section>
      
    </div>
  )
  
}

export default RegPassions;