import ReusableButton from "./ReusableButton"; 
import UserName from "./UserName";
import "./Home.css"; 
import ExitGame from "./ExitGame";

const Home =() => {
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
    // Need to add rules logic here
    console.log("Viewing game rules...");
  };

return(
  //Creating a simple container for now, will be styled later. 
  <div className="container">
    <h1>Welcome to the Minesweeper game</h1>
    <div className="box">
      <div className="row">
        <ReusableButton label="Start the game" onClick={handleStartGame} />
      </div>
      <div className="row">
        <ReusableButton label="Rules" onClick={handleRules} />
      </div>
      <div className="row">
        <ExitGame handleExit={handleExit} /> 
      </div>
    </div>
  </div>
);
};

  


export default Home;