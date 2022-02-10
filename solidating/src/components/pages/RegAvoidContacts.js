import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import './RegAvoidContacts.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RegAvoidContacts = ({handleAdd}) => {

  const navigate = useNavigate();

  const [avoidContacts, setAvoidContacts] = useState({avoidContacts: []})
  const [avoidContactSelect, setAvoidContactSelect] = useState('Avoid Contacts')

  const contactsArr = ['Avoid Contacts', 'Contact 1', 'Contact 2']

  const contactList = contactsArr.map((contact, index) => {
    return (
      <option value={contact} key={index}>
        {contact}
      </option>
    )
  })


  const handleChange = (event) => {
    let value = event.target.value
    setAvoidContactSelect(value)
    if (avoidContacts.avoidContacts.filter((contact) => contact === value).length > 0) {
      const newAvoidContacts = avoidContacts.avoidContacts.filter((contact) => contact !== value);
      setAvoidContacts({avoidContacts: [...newAvoidContacts]})
    } else if (value !== 'Avoid Contacts') {
      setAvoidContacts({
        avoidContacts: [...avoidContacts.avoidContacts, value]
      })
    }
    
  }
  

  const handleContinue = (event) => {
    event.preventDefault();
    handleAdd(avoidContacts)
    navigate('../welcome')
  }

  return (
    <div className='avoidContacts-reg'>
      <FontAwesomeIcon 
        icon={['fas', 'exclamation-triangle' ]}
        className='myBasics-icon icon'
        alt='my basics icon'
      />
      <h1 className='signup-header'>Want to avoid someone in your Contact list?</h1>
      <form onSubmit={handleContinue}>
        <select value={avoidContactSelect} onChange={handleChange}>
          {contactList}
        </select>
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

export default RegAvoidContacts;