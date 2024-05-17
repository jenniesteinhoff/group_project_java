import { Link } from "react-router-dom";
import ReusableButton from "./ReusableButton";
import Message from "./Message";
import ExitButton from "./ExitButton"
import "./LandingPage.css"

const LandingPage = () => {

  return (
    //Creating a simple container for now, will be styled later. 
    <div id="landingpage-container">
      <h1>Welcome to the Minesweeper game</h1>
        <nav className="box">
          <div className="row">
            <Link to="/level">
              <ReusableButton label="Start the game" />
            </Link>
          </div>

          <div className="row">
            <Link to="/rules">
              <ReusableButton label="Rules" />
            </Link>
          </div>

          <div className="row">
            <Link to="/exit">
              <ReusableButton label="Exit" />
            </Link>
          </div>
        </nav>
    </div>
  );
};




export default LandingPage;
