import Home from "./components/Home";
import Message from "./components/Message";
import ReusableButton from "./components/ReusableButton";
import Rules from "./components/Rules";


function App(){
  return(
    <div className="container">
   <Message></Message>
   <Home></Home>
   
   <Rules></Rules>
   
    </div>
  );
}
export default App;