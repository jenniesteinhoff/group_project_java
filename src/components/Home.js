import ReUsableButton from "./ReusableButton"; 
import UserName from "./UserName";
import Level from "./Level"

const Home = () => {
  const handleStartGame = () => {
    <Level/>
  };

  const handleExit = () => {
    // Need to add exit logic here
    console.log("Exiting game...");
  };

  const handleHowTo = () => {
    // Need to add rules logic here
    console.log("Viewing game rules...");
  };

return(
    //Creating a simple container for now, will be styled later. 
    <div className="container">
        <UserName userId="Player" />
        <h1>Welcome to the Minesweeper game</h1>
        <div className="row">
            <ReUsableButton label="Start the game" onClick={handleStartGame} />
        </div>
        <div className="row">
            <ReUsableButton label="How to play" onClick={handleHowTo} />
        </div>
        <div className="row">
            <ReUsableButton label="Exit" onClick={handleExit} />
        </div>
  </div>
);
};
export default Home;