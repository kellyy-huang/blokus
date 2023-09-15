import "./App.css";
import React, { useState } from "react";
import Draggable from "react-draggable";

const letterBank = [
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "A",
  "B",
  "B",
  "B",
  "C",
  "C",
  "C",
  "D",
  "D",
  "D",
  "D",
  "D",
  "D",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "E",
  "F",
  "F",
  "F",
  "G",
  "G",
  "G",
  "G",
  "H",
  "H",
  "H",
  "I",
  "I",
  "I",
  "I",
  "I",
  "I",
  "I",
  "I",
  "I",
  "I",
  "I",
  "I",
  "J",
  "J",
  "K",
  "K",
  "L",
  "L",
  "L",
  "L",
  "L",
  "M",
  "M",
  "M",
  "N",
  "N",
  "N",
  "N",
  "N",
  "N",
  "N",
  "N",
  "O",
  "O",
  "O",
  "O",
  "O",
  "O",
  "O",
  "O",
  "O",
  "O",
  "O",
  "P",
  "P",
  "P",
  "Q",
  "Q",
  "R",
  "R",
  "R",
  "R",
  "R",
  "R",
  "R",
  "R",
  "R",
  "S",
  "S",
  "S",
  "S",
  "S",
  "S",
  "T",
  "T",
  "T",
  "T",
  "T",
  "T",
  "T",
  "T",
  "T",
  "U",
  "U",
  "U",
  "U",
  "U",
  "U",
  "V",
  "V",
  "V",
  "W",
  "W",
  "W",
  "X",
  "X",
  "Y",
  "Y",
  "Y",
  "Z",
  "Z",
];

function App() {
  const shuffled = letterBank.sort(() => Math.random() - 0.5);
  const [letters, setLetters] = useState(shuffled.slice(0, 13));
  const [remainingLetters, setRemainingLetters] = useState(
    shuffled.slice(13, letterBank.length)
  );

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

  return (
    <div className="App">
      <h1>fruitgrams</h1>
      <div>
        <button onClick={getNewLetter}>get another letter!</button>
      </div>
      <div className="lettersBox">{showLetters()}</div>
    </div>
  );
}

export default App;
