import { Link } from "react-router-dom";
import ReusableButton from "./ReusableButton"; 
import Message from "./Message";
import ExitButton from "./ExitButton"
import "./LandingPage.css"

const LandingPage =() => {
  const handleStartGame = () => {   //HandlestartGame logic is added here, was sourced from YT.
    // The function is passed on to onClick prop in the below.  
        alert("Game started!");// Add the game logic here but for now an alert is added for testing. 
  };

  const handleExit = () => {
       const confirmExit = window.confirm('Thank you for playing! Are you sure you want to exit the game?');
     if (confirmExit) {
    // For now, just using alert to display. Will edit later if we learn something more. 
    window.close();
    }
  };

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
              {/* Use handleRules function to navigate to the rules page */}
              <ReusableButton label="Rules" onClick={handleRules} />
            </div>
       

   
    <div className="row">
    <ExitButton handleExit={handleExit} /> </div>
        </nav>
  
  </div>
  
  </div>
);
};

  


export default LandingPage;
