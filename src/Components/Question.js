import React, { useState } from 'react';
import { FaPlusCircle, FaMinusCircle } from 'react-icons/fa';

function Question({ title, info }) {
  const [showInfo, setShowInfo] = useState(false);
  const toggleHandler = (e) => {
    e.preventDefault();
    setShowInfo(!showInfo);
  };

  return (
    <div className='question'>
      <header>
        <h4>{title}</h4>
        <button className='btn' onClick={toggleHandler}>
          {showInfo ? <FaMinusCircle /> : <FaPlusCircle />}
        </button>
      </header>
      <p>{showInfo && info}</p>
    </div>
  );
}

export default Question;
