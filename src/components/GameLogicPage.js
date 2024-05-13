import React, { useState } from "react";
import "./GameLogicPage.css";
import exampleImage from "../Assets/image.png"


const GameLogicPage = () => {
  const handleGoBack = () => {
    window.history.back(); // Navigate to the previous page
   
  };

  const [box1Color, setBox1Color] = useState("white"); //initializing state variables for color changing
  const [box3Color, setBox3Color] = useState("white");//initializing state variables for color changing
  const [box4Color, setBox4Color] = useState("white");//initializing state variables for color changing
  const [box5Color, setBox5Color] = useState("white");
  const [box6Color, setBox6Color] = useState("white");
  const [box7Color, setBox7Color] = useState("white");
  const [box8Color, setBox8Color] = useState("white");
  const [box9Color, setBox9Color] = useState("white");
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
  const handleBox5Click = () => {
    if (!gameOver) {
        setBox5Color("green");
    }
};

const handleBox6Click = () => {
  if (!gameOver) {
      setBox6Color("green");
  }
};

const handleBox7Click = () => {
  if (!gameOver) {
      setBox7Color("green");
  }
};

const handleBox8Click = () => {
  if (!gameOver) {
      setBox8Color("green");
  }
};

const handleBox9Click = () => {
  if (!gameOver) {
      setBox9Color("green");
  }
};


  //Below, inside the return, all the rendering happens. In box 2, when the gameover is true,  
  //it will show an image and Game over text.

  return (
      <div className="gamecontainer">
         <div className="row">
          <div className="cell" style={{ backgroundColor: box1Color }} onClick={handleBox1Click}>
              Box 1
          </div> 
          <div className="cell" onClick={handleBox2Click}>
              Box 2
          </div>
          <div className="cell" style={{ backgroundColor: box3Color }} onClick={handleBox3Click}>
              Box 3
          </div>
          </div>

          <div className="row">
          <div className="cell" style={{ backgroundColor: box4Color }} onClick={handleBox4Click}>
              Box 4
          </div>
           <div className="cell" style={{ backgroundColor: box5Color }} onClick={handleBox5Click}>
              Box 5
          </div>
          <div className="cell" style={{ backgroundColor: box6Color }} onClick={handleBox6Click}>
              Box 6
          </div>
          </div>

          <div className="row">
          <div className="cell" style={{ backgroundColor: box7Color }} onClick={handleBox7Click}>
              Box 7
          </div>
          <div className="cell" style={{ backgroundColor: box8Color }} onClick={handleBox8Click}>
              Box 8
          </div>
          <div className="cell" style={{ backgroundColor: box9Color }} onClick={handleBox9Click}>
              Box 9
          </div>
          </div>
          
          {gameOver && (
              <>
                  <img src={exampleImage} alt="Bomb exploding" />
                  <p>Game over!</p>
              </>
          )}
  <button onClick={handleGoBack}>Go back!</button>
      </div>
      
  );
};

export default GameLogicPage;


