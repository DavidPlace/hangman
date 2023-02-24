import React from 'react'

// define a functional component named WrongLetters
const WrongLetters = ({ wrongLetters }) => {

  // render the component
  return (
    <div className="wrong-letters-container">
      <div>
        {/* if there are wrong letters, display "Wrong" */}
        {wrongLetters.length > 0 && 
          <p>Wrong</p>
        }
        {/* map over the wrong letters and render them as individual spans */}
        {/* then join the array of spans with commas to create a string */}
        {wrongLetters
          .map((letter, i) => <span key={i}>{letter}</span>) // render each wrong letter
          .reduce((prev, curr) => prev === null ? [curr] : [prev, ', ', curr], null)} {/* join the array of spans with commas */}
      </div>
    </div>
  )
}

export default WrongLetters // export the component
