import React, { useState, useEffect } from "react";
import ReUsableCell from "./ReusableCell";
import ScoreRibbon from "./Score";
import ReUsableButton from "./ReusableButton";
import ButtonExit from "./Exit";
import Bomb from "./Bomb";



const Level = () => {

    const [boxes, setBoxes] = useState([]);
    const [minePressed, setMinePressed] = useState([]);

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
    };


    const handleClick = (index) => {
        if (!minePressed) {
            const newBoxes = [...boxes];
            newBoxes[index].revealed = true;

            setBoxes(newBoxes);

            if (newBoxes[index].mine) {
                setMinePressed(true);
            }
        }
    };

    const resetGame = () => {
        initiateGame();
    };


    const numberToWords = (number) => {
        const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
        return numbers[number];
    }

    return (
        <div className="lvlStructure">


            <div className="gameBoard">

                {boxes.map((box, index) => (

                    <div key={index} className={'cell ' + numberToWords(index)} onClick={() => handleClick(index)} >
                        <ReUsableCell />
                        {(box.revealed && box.mine) ? (<Bomb />) : ''}
                        {box.revealed ? box.mine ? 'Mine' : 'Clean' : ''}
                    </div>

                ))}
            </div>

            {minePressed ? "Mine pressed!!!! Game Over!!!" : ''}

            <div className="game_score"><ScoreRibbon className="score-ribbon" /></div>
            <div className="game_exit"><ButtonExit className="btn-exit" label="Exit" onClick={() => resetGame()} /></div>
        </div>
    );
};

export default Level;