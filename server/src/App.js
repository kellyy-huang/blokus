import "./App.css";
import React, { useState } from "react";
import Draggable from "react-draggable";
import { letterBank, themes } from "./constants.js";

function App() {
  const shuffled = letterBank.sort(() => Math.random() - 0.5);
  const [letters, setLetters] = useState(shuffled.slice(0, 13));
  const [remainingLetters, setRemainingLetters] = useState(
    shuffled.slice(13, letterBank.length)
  );
  const [gameStarted, setGameStarted] = useState(false);
  const [theme, setTheme] = useState("watermelon");

  function showLetters() {
    let letterBank = [];
    for (const letter of letters) {
      letterBank.push(
        <Draggable>
          <div className="letterContainer">{letter}</div>
        </Draggable>
      );
    }
    return letterBank;
  }

  function getNewLetter() {
    const newLetter = remainingLetters.pop();
    setLetters([...letters, newLetter]);
    setRemainingLetters([...remainingLetters]);
  }

  function finishGame() {
    console.log("yayyy");
  }

  function startGame() {
    setGameStarted(true);
  }

  const handleSelectTheme = (e) => {
    setTheme(e.target.value);
  };

  function selectTheme() {
    const themeOptions = [];
    for (const fruit of themes) {
      themeOptions.push(<option value={fruit}>{fruit}</option>);
    }
    return (
      <div>
        <select onChange={handleSelectTheme}>{themeOptions}</select>
      </div>
    );
  }

  function actionButton() {
    if (gameStarted === true && remainingLetters.length > 0) {
      return <button onClick={getNewLetter}>next letter!</button>;
    } else if (gameStarted === true && remainingLetters.length === 0) {
      return <button onClick={finishGame}>winner!!!!!</button>;
    } else if (gameStarted === false) {
      return (
        <div>
          {selectTheme()}
          <button onClick={startGame}>start game!</button>
        </div>
      );
    }
  }

  return (
    <div className="App">
      <div className={theme}>
        <h1>{theme}grams</h1>
        <div>{actionButton()}</div>
        {gameStarted ? <div className="lettersBox">{showLetters()}</div> : null}
      </div>
    </div>
  );
}

export default App;
