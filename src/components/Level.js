import React, { useState, useEffect } from "react";
import PressedReUsableCell from "./PressedReusableCell";
import ReUsablePopup from "./ReusablePopup";
import ScoreRibbon from "./Score";
import ButtonExit from "./ExitLevel";
import Mine from "./MineCell";
import { isDisabled } from "@testing-library/user-event/dist/utils";

const Level = () => {

    const [boxes, setBoxes] = useState([]);
    const [minePressed, setMinePressed] = useState([]);
    const [count, setCount] = useState([]);
    const [isClicked, setIsClicked] = useState([]);

    useEffect(() => {
        initiateGame();
    }, []);

    const initiateGame = () => {
        const numberOfBoxes = 9;
        const initialBoxes = Array(numberOfBoxes).fill().map(() => ({ revealed: false, mine: false }));
        const mineIndex = Math.floor(Math.random() * numberOfBoxes);
        initialBoxes[mineIndex].mine = true;
        setBoxes(initialBoxes);
        setMinePressed(false);
        setIsClicked(false)
        setCount(0)
    };


    const handleClick = (index) => {
        if (!minePressed) {
            const newBoxes = [...boxes];
            newBoxes[index].revealed = true;
            
            setBoxes(newBoxes);

            if (newBoxes[index].revealed) {
                setIsClicked(true);
            }

            if (newBoxes[index].mine) {
                setMinePressed(true);
                setCount(0)
            }

        }


    };

    const ReUsableCell = (number) => { 
        return (
            <button className="reuse-cell" disabled={isClicked} onClick={()=>setCount(count+1)}>?</button>
            
        );
    };

    const numberToWords = (number) => {
        const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
        return numbers[number];
    }

    return (
        <div className="lvlStructure">


            <div className="gameBoard">

                {boxes.map((box, index) => (

                    <div key={index} className={'cell ' + numberToWords(index)} onClick={() => handleClick(index) & setIsClicked(index)} >
                        
                        {(box.revealed && box.mine) ? (<Mine />) : <ReUsableCell/>}
                        {box.revealed ? box.mine ? '' : '' : ''}
                    </div>

                ))}
            </div>
            
            
            {minePressed ? <ReUsablePopup result={"You lose"} resultText={"Better luck next time!"} reset={<button className="popup-btn one" 
            onClick={() => initiateGame() }>Re-start</button>} menu={<button className="popup-btn two" onClick={() => initiateGame() }>Menu</button>}/> : ''}
            
            {count === 8 ? <ReUsablePopup result={"You win!"} resultText={"Do you want to try again?"} reset={<button className="popup-btn one" 
            onClick={() => initiateGame() }>Re-start</button>} menu={<button className="popup-btn two" onClick={() => initiateGame() }>Menu</button>}/> : ''}

            <div className="game_exit"><ButtonExit className="btn-exit" label="Exit" onClick={() => initiateGame() } /></div>

            <div className="game_score"><ScoreRibbon className="score-ribbon" label={count} /></div>
        </div>
    );
    
};

export default Level;
