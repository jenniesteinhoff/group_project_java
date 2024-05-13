import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Message from "./components/Message";
import ReusableButton from "./components/ReusableButton";
import Rules from "./components/Rules";
import ExitButton from "./components/ExitButton";
import GameLogicPage from "./components/GameLogicPage";
import exampleImage from "../src/Assets/image.png"

function App(){
  return(
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/rules" element={<Rules />} />
        </Routes>
        <GameLogicPage></GameLogicPage>
      </div>
    </BrowserRouter>
   
   
  );
}
export default App;