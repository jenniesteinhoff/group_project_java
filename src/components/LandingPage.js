import { Link } from "react-router-dom";
import ReusableButton from "./ReusableButton"; 
import Message from "./Message";
import ExitButton from "./ExitButton"
import "./LandingPage.css"

const LandingPage =() => {
  const handleStartGame = () => {   //HandlestartGame logic is added here, was sourced from YT.
    window.location.href="/GameLogicPage";      
     
  };

  const handleExit = () => {
    window.location.href="/ExitButton";
    console.log("close");
    }
  

  const handleRules = () => {
  window.location.href="/rules";
  };

return(
    //Creating a simple container for now, will be styled later. 
    <div className="container">
    <h1>Welcome to the Minesweeper game</h1>
    <div className="box">
      <nav>
               
          <div className="row">
           <ReusableButton label="Start the game" onClick={handleStartGame} />
    </div>
       
            <div className="row">
              <ReusableButton label="Rules" onClick={handleRules} />
            </div>
       

   
    <div className="row">
    <ReusableButton label="Exit" onClick={handleExit} />
    </div>
        </nav>
  
  </div>
  
  </div>
);
};

  


export default LandingPage;
