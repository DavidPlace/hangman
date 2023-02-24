// import React library
import React from 'react';
// Take two props as input: selectedWord and correctLetters.
const Word = ({ selectedWord, correctLetters }) => {
  return (
    // This creates a div element with a class of "word".
    <div className="word">
      {/* This splits the selectedWord string into an array of individual letters, and maps over each letter. */}
      {selectedWord.split('').map((letter, i) => {
        return (
          // createspan current letter if in  array of correct letters or empty string if it is not.
          <span className="letter" key={i}>
            {correctLetters.includes(letter) ? letter : ''}
          </span>
        )
      })}
    </div>
  )
}

export default Word;
