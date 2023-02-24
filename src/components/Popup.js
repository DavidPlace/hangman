import React, { useEffect } from 'react';
import { checkWin } from '../helpers/helpers'; //checks winstate
// Define the Popup component with props
const Popup = ({correctLetters, wrongLetters, selectedWord, setPlayable, playAgain}) => {
  // Set up variables to hold the final message to be displayed, whether to show the correct answer,
  // and whether the game is still playable
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;
  // If the game is won, set the final message to 'You won!' and set playable to false
  if( checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ) {
    finalMessage = 'You won! Well done!'
    playable = false;
  // If the game is lost, set the final message to 'Loser, learn some more words!' and set playable to false
  } else if( checkWin(correctLetters, wrongLetters, selectedWord) === 'lose' ) {
    finalMessage = 'Loser, learn some more words!';
    finalMessageRevealWord = `The answer was: ${selectedWord}`;
    playable = false;
  }
  // Use useEffect to update the game's playability state
  useEffect(() => {
    setPlayable(playable);
  });
  // Render the component with the final message, whether to show the correct answer, and the play again button
  // Feedback green or red to user with display as "finalColour"
  const finalColour = checkWin(correctLetters, wrongLetters, selectedWord) === 'win' ? '#38a1235e' : '#bb0d0d63';

  return (
    <div className="popup-container" style={finalMessage !== '' ? {display:'flex'} : {}}>
      <div className="popup" style={{ backgroundColor: finalColour }}>
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Play Again</button>
      </div>
    </div>
  )
}
// Export the Popup component
export default Popup;
