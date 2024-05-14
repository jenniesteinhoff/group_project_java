import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Message from "./components/Message";
import ReusableButton from "./components/ReusableButton";
import Rules from "./components/Rules";
import ExitButton from "./components/ExitButton";

function App(){
  return(
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/ExitButton" element={<ExitButton />} />

        </Routes>
    
      </div>
    </BrowserRouter>
   
   
  );
}
export default App;
