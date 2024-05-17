import React, { useState, useEffect } from "react";
import ReUsablePopup from "./ReusablePopup";
import ScoreRibbon from "./Score";
import ButtonExitLevel from "./ExitLevel";
import Mine from "./MineCell";
import { Link } from "react-router-dom";

const Level = () => {

    const [boxes, setBoxes] = useState([]);
    const [minePressed, setMinePressed] = useState([]);
    const [count, setCount] = useState([]);

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
        setCount(0);
    };


    const handleClick = (index) => {
        console.log(boxes);
        if (!minePressed) {
            const newBoxes = [...boxes];
            newBoxes[index].revealed = true;

            setBoxes(newBoxes);

            if (newBoxes[index].mine) {
                setMinePressed(true);
            }
        }
    };


    const ReUsableCell = (args) => {
        const box = args.box;
        return (
            <button className="reuse-cell"
                style={{ opacity: box.revealed ? 0.33 : 1, pointerEvents: box.revealed ? "none" : '', pointerEvents: count === 8 && minePressed==(false) ? "none" : '', pointerEvents: minePressed ? "none" : ''}}
                onClick={() => box.revealed ? undefined : setCount(count + 1)}>
                {box.revealed ? '-' : '?'}
            </button>
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

                    <div key={index} className={'cell ' + numberToWords(index)} onClick={() => handleClick(index)} >

                        {(box.revealed && box.mine) ? (<Mine />) : <ReUsableCell box={box} />}
                        {box.revealed ? box.mine ? '' : '' : ''}
                    </div>

                ))}
            </div>
            
            {minePressed ? <ReUsablePopup result={"You lose"} resultText={"Better luck next time!"} reset={<button className="popup-btn one"
                onClick={() => initiateGame()}>Re-start</button>} menu={<button className="popup-btn two" onClick={() => initiateGame()}><Link to="/">Menu</Link></button>} /> : ''}

            {count === 8 && minePressed==(false) ? <ReUsablePopup result={"You win!"} resultText={"Do you want to try again?"} reset={<button className="popup-btn one"
                onClick={() => initiateGame()}>Re-start</button>} menu={<button className="popup-btn two" onClick={() => initiateGame()}><Link to="/">Menu</Link></button>} /> : ''}

            <div className="game_exit">
                <ButtonExitLevel className="btn-exit" label="Restart" onClick={() => initiateGame()} />
                <Link to="/">
                    <ButtonExitLevel className="btn-exit" label="Exit" />
                </Link>
            </div>

            <div className="game_score"><ScoreRibbon className="score-ribbon" label={count} /></div>
        </div>
    );

};

export default Level;
