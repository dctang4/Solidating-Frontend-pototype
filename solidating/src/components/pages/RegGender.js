import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./RegGender.scss";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const RegGender = ({ handleAdd }) => {
  const navigate = useNavigate();

  const [gender, setGender] = useState({ gender: "" });

  const defaultGenderArr = [
    { value: "Man", alt: "button for gender man", bgColor: "white" },
    { value: "Woman", alt: "button for gender woman", bgColor: "white" },
    { value: "More", alt: "button for more genders", bgColor: "white" },
  ];

  const [genderArr, setGenderArr] = useState(defaultGenderArr);

  const handleClick = (event) => {
    const value = event.target.value;
    setGender({ gender: value });

    if (value === "Man") {
      setGenderArr([
        { ...defaultGenderArr[0], bgColor: "yellow" },
        { ...defaultGenderArr[1] },
        { ...defaultGenderArr[2] },
      ]);
    } else if (value === "Woman") {
      setGenderArr([
        { ...defaultGenderArr[0] },
        { ...defaultGenderArr[1], bgColor: "yellow" },
        { ...defaultGenderArr[2] },
      ]);
    } else if (value === "More") {
      setGenderArr([
        { ...defaultGenderArr[0] },
        { ...defaultGenderArr[1] },
        { ...defaultGenderArr[2], bgColor: "yellow" },
      ]);
    }
  };

  const handleContinue = (event) => {
    event.preventDefault();
    handleAdd(gender);
    navigate("../interest");
  };

  const genderSelect = genderArr.map((gender) => {
    return (
      <input
        type="button"
        className="gender-btn"
        value={gender.value}
        onClick={handleClick}
        style={{ backgroundColor: gender.bgColor }}
        alt={gender.alt}
      />
    );
  });

  return (
    <div className="gender-reg">
      <FontAwesomeIcon 
        icon={['fas', 'restroom']} 
        className='gender-icon icon'
        alt='gender icon'
      />
      <h1 className='signup-header'>What's your Gender?</h1>
      <form onSubmit={handleContinue}>
        {genderSelect}
        <input
          type="submit"
          className="continue-Bt"
          value="Continue"
          alt="Continue button"
        />
      </form>
    </div>
  );
};

export default RegGender;
