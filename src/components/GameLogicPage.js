import React, { useState } from "react";
import "./GameLogicPage.css";
import exampleImage from "../Assets/image.png"


const GameLogicPage = () => {
  const [box1Color, setBox1Color] = useState("white"); //initializing state variables for color changing
  const [box3Color, setBox3Color] = useState("white");//initializing state variables for color changing
  const [box4Color, setBox4Color] = useState("white");//initializing state variables for color changing
  const [gameOver, setGameOver] = useState(false);//initialising boolean gameover state variable, 
                                                  //this will ideally be indicating if the game is over or not. 
                                                  //We will start with game is not over first. ie gameover (false)



  //simple click handler functions are defined below which will be responsible for click events
  // on the respective cell/boxes. 
    //For now, we are keeping mine in the secondbox. 
    
  const handleBox1Click = () => {  //when a box1 is clicked, this fn is called.  
      if (!gameOver) {   // here its checking if gameover is false. IF the game is not over, it changes to green. 
          setBox1Color("green");
      }
  };


  const handleBox2Click = () => { 
      if (!gameOver) {  //here the gameover variable is set to true. which will stop the game. 
          setGameOver(true);
      }
  };

  
  const handleBox3Click = () => {
      if (!gameOver) {
          setBox3Color("green");
      }
  };

  const handleBox4Click = () => {
      if (!gameOver) {
          setBox4Color("green");
      }
  };

  //Below, inside the return, all the rendering happens. In box 2, when the gameover is true,  
  //it will show an image and Game over text.

  return (
      <div className="container">
          <div className="box" style={{ backgroundColor: box1Color }} onClick={handleBox1Click}>
              Box 1
          </div> 

          <div className="box" onClick={handleBox2Click}>
              Box 2
          </div>

          {gameOver && (
              <>
                  <img src={exampleImage} alt="Bomb exploding" />
                  <p>Game over!</p>
              </>
          )}

          <div className="box" style={{ backgroundColor: box3Color }} onClick={handleBox3Click}>
              Box 3
          </div>

          <div className="box" style={{ backgroundColor: box4Color }} onClick={handleBox4Click}>
              Box 4
          </div>
      </div>
  );
};

export default GameLogicPage;


