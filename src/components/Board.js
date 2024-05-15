
import React, { useState, useEffect } from 'react';
import ReusableButton from "./ReusableButton";
import Bomb from "./Bomb";


// Generate a random index between 0 and 8
const randomIndex = () => {
  return Math.floor(Math.random() * 9);
};

// Create an array to hold the 9 cells of the game board and their properties at the start of the game.
const initialCells = () => {
  const cells = [];
  for (let i = 0; i < 9; i++) {
      cells.push({
          id: i,
          isBomb: false,
          isRevealed: false,
      });
  }
  return cells;
};
  
//Randomly place 1 bomb in the cells array
const placeBomb = (cells) => {
  const bombIndex = randomIndex();
  cells[bombIndex].isBomb = true;
  return cells;
};

// Create component for managing the different states of the game
const Board = () => {
  const [cells, setCells] = useState(initialCells());
  
   // Function to reset the board to its initial state
   const resetBoard = () => {
      const newCells = initialCells(); // Get initial cells
      setCells(newCells); // Update state with new cells

};
return (
  <div className="container">
      <div className="lvlStructure">
          {/* Map over cells array to render individual cells */}
          {cells.map((cell) => (
              <div key={cell.id} className={`cell ${cell.id}`}>
                {/* Check if the cell is a bomb and render bomb component */}
                {cell.isBomb && <Bomb />}
                  <ReUsableButton />
              </div>
          ))}
      </div>
      <ReusableButton label="Reset Game" onClick={resetBoard} />
  
  </div>
)

};


  export default Board;