import ReUsableCell from "./ReusableCell";
import ReUsableRibbon from "./ReusableRibbon";
import Bomb from "./Bomb";
import ReUsableButton from "./ReusableButton";


const Level = () => {

    const cellPressed = () => {
        console.log ("Cell has been pressed...");
    };
    const bombPressed = () => {
        console.log ("Bomb has been pressed...");
    };
    const goToExit = () => {
        prompt = ("")
        console.log ("You have exited...");
    };

    return (
        <div className="container">
            <div className="lvlStructure">
                <div className="cell one"><ReUsableCell onClick={cellPressed}/></div>
                <div className="cell two"><ReUsableCell onClick={cellPressed}/></div>
                <div className="cell three"><ReUsableCell onClick={cellPressed}/></div>
                <div className="cell four"><ReUsableCell onClick={cellPressed}/></div>
                <div className="cell five"><ReUsableCell onClick={cellPressed}/></div>
                <div className="cell six"><ReUsableCell onClick={cellPressed}/></div>
                <div className="cell seven"><ReUsableCell onClick={cellPressed}/></div>
                <div className="cell eight"><ReUsableCell onClick={cellPressed}/></div>
                <div className="cell nine"><ReUsableCell onClick={cellPressed}/></div>
                <div className="cell bomb"><Bomb onClick={bombPressed}/></div>

                <div className="game_score"><ReUsableRibbon className="reuse-ribbon" label="Hello"/></div>
                <div className="game_exit"><ReUsableButton className="reuse-btn" label="Exit" onClick={goToExit}/></div>

            </div> 
            
        </div>
    );
};

export default Level;