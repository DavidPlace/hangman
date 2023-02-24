import { wait } from "@testing-library/user-event/dist/utils";

// Set the value of the state to true for 2 seconds
export function showNotification(setter) {
    setter(true);
    setTimeout(() => setter(false), 2000);
  }
  
  // Determine the status of the game based on correct and wrong guesses and the word to be guessed
  export function checkWin(correct, wrong, word) {
    // Assume that the player has won the game
    let status = 'win';
    
    // Check each letter in the word
    for (let letter of word) {
      // If the letter is not in the correct array, change the status to an empty string
      if (!correct.includes(letter)) {
        status = '';
        break;
      }
    }
    
    // If the number of incorrect guesses is equal to six, the status is changed to lose
    if (wrong.length === 10) {
      status = 'lose';
    }
    // Return the status of the game
    return status;
  }
  