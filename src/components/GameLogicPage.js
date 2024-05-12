import React, { useState } from "react";
import "./GameLogicPage.css";
import exampleImage from "../Assets/image.png"



const GameLogicPage = () => {
  const [box1Color, setBox1Color] = useState("white");
  const [box3Color, setBox3Color] = useState("white");
  const [box4Color, setBox4Color] = useState("white");
  const [showImage, setShowImage] = useState(false);

 
  const handleBox1Click =()=> {
    setBox1Color("green");
  }
  const handleBox2Click = () => {
    setShowImage(true);
    
  };
  const handleBox3Click =()=> {
    setBox3Color("green");
  }
  const handleBox4Click =()=> {
    setBox4Color("green");
  }

  return (
    <div className="container">
       <div className="box" style={{ backgroundColor: box1Color }} onClick={handleBox1Click}>
        Box 1
      </div>
       <div className="box" onClick={handleBox2Click}>
        Box 2
      </div>
          {showImage && (
        <img src={exampleImage} alt="Bomb exploding" />
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