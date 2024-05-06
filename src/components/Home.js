import ReusableButton from "./ReusableButton"; 
import Message from "./Message";

const Home =() => {
  const handleStartGame = () => {   //HandlestartGame logic is added here, was sourced from YT.
    // The function is passed on to onClick prop in the below.  
        alert("Game started!");// Add the game logic here but for now an alert is added for testing. 
  };

  const handleExit = () => {
    // Need to add exit logic here
    console.log("Exiting game...");
  };

  const handleRules = () => {
    // Need to add rules logic here
    console.log("Viewing game rules...");
  };

return(
    //Creating a simple container for now, will be styled later. 
    <div className="container">
    <h1>Welcome to the Minesweeper game</h1>
    <div className="row">
           <ReusableButton label="Start the game" onClick={handleStartGame} />
    </div>
    <div className="row">
          <ReusableButton label="Rules" onClick={handleRules} />
    </div>
    <div className="row">
         <ReusableButton label="Exit" onClick={handleExit} />
    </div>
  </div>
);
};

        


export default Home;
