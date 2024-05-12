import Home from "./components/Home";
import Message from "./components/Message";
import ReusableButton from "./components/ReusableButton";
import Rules from "./components/Rules";
import ExitButton from "./components/ExitButton";
import GameLogicPage from "./components/GameLogicPage";
import exampleImage from "../src/Assets/image.png"

function App(){
  return(
    <div className="container">
   <Message></Message>
   <Home></Home>
   <exampleImage></exampleImage>
   <GameLogicPage></GameLogicPage>
   <Rules></Rules>
   
    </div>
  );
}
export default App;