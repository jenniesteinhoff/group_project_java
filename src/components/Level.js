import ReUsableButton from "./ReusableButton";
import Bomb from "./Bomb";


const Level = () => {
    return (
        <div className="container">
            <div className="lvlStructure">
                <div className="cell one"><ReUsableButton/></div>
                <div className="cell  two"><ReUsableButton/></div>
                <div className="cell three"><ReUsableButton/></div>
                <div className="cell four"><ReUsableButton/></div>
                <div className="cell five"><ReUsableButton/></div>
                <div className="cell six"><ReUsableButton/></div>
                <div className="cell seven"><ReUsableButton/></div>
                <div className="cell eight"><ReUsableButton/></div>
                <div className="cell nine"><ReUsableButton/></div>
                <div className="cell bomb"><Bomb/></div>     
            </div> 
        </div>
    );
};

export default Level;