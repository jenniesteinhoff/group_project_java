import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import Message from "./components/Message";
import ReusableButton from "./components/ReusableButton";
import Rules from "./components/Rules";
import ExitButton from "./components/ExitButton";
import Level from "./components/Level";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/level" element={<Level />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/exit" element={<ExitButton />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}
export default App;
