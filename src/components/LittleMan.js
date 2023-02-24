// LittleMan.js

import React from 'react';
import hangmandrawings from './hangmandrawings';

const LittleMan = ({ wrongLetters }) => {
  const errors = wrongLetters.length;

  return (
    <div className="lilman-container">
      <img src={hangmandrawings[errors]} alt={`Hangman - Incorrect Guesses: ${errors}`} />
    </div>
  );
};

export default LittleMan;
