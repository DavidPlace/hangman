import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import LittleMan from "./components/LittleMan";
import WrongLetters from "./components/WrongLetters";
import Word from "./components/Word";
import Popup from "./components/Popup";
import Notification from "./components/Notification";
import { showNotification as show, checkWin } from "./helpers/helpers";
import dictionary from "./dictionary/words.json";
import "./App.css";

// Get the words from the dictionary
const words = dictionary;
// Choose a random word from the dictionary
let selectedWord = words[Math.floor(Math.random() * words.length)];

function App() {
  // Set up state variables
  const [playable, setPlayable] = useState(true); // Can the user interact with the game?
  const [correctLetters, setCorrectLetters] = useState([]); // Letters the user has guessed correctly
  const [wrongLetters, setWrongLetters] = useState([]); // Letters the user has guessed incorrectly
  const [showNotification, setShowNotification] = useState(false); // Should a notification be shown?

  // Set up an event listener for key presses
  useEffect(() => {
    const handleKeydown = (event) => {
      const { key, keyCode } = event;
      if (playable && keyCode >= 65 && keyCode <= 90) { // Only accept letters A-Z
        const letter = key.toLowerCase();
        if (selectedWord.includes(letter)) { // If the letter is in the word
          if (!correctLetters.includes(letter)) { // If the user hasn't already guessed this letter correctly
            setCorrectLetters((currentLetters) => [...currentLetters, letter]); // Add the letter to the list of correct guesses
          } else { // If the user has already guessed this letter correctly
            show(setShowNotification); // Show a notification
          }
        } else { // If the letter is not in the word
          if (!wrongLetters.includes(letter)) { // If the user hasn't already guessed this letter incorrectly
            setWrongLetters((currentLetters) => [...currentLetters, letter]); // Add the letter to the list of incorrect guesses
          } else { // If the user has already guessed this letter incorrectly
            show(setShowNotification); // Show a notification
          }
        }
      }
    };
    window.addEventListener("keydown", handleKeydown);

    // Clean up the event listener when the component is unmounted
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [correctLetters, wrongLetters, playable]);

  // Reset the game
  function playAgain() {
    setPlayable(true); // Allow the user to interact with the game

    // Clear the lists of correct and incorrect guesses
    setCorrectLetters([]);
    setWrongLetters([]);

    // Choose a new random word
    const random = Math.floor(Math.random() * words.length);
    selectedWord = words[random];
  }

  // Render the game components
  return (
    <>
      <Header />
      <div className="game-container">
        <LittleMan wrongLetters={wrongLetters} />
        <WrongLetters wrongLetters={wrongLetters} />
        <Word selectedWord={selectedWord} correctLetters={correctLetters} />
      </div>
      <Popup
        correctLetters={correctLetters}
        wrongLetters={wrongLetters}
        selectedWord={selectedWord}
        setPlayable={setPlayable}
        playAgain={playAgain}
      />
      <Notification showNotification={showNotification} />
    </>
  );
}

export default App;
