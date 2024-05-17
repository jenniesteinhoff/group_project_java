import React, { useState, useEffect } from "react";
import ReUsablePopup from "./ReusablePopup";
import ScoreRibbon from "./Score";
import ButtonExitLevel from "./ExitLevel";
import Mine from "./MineCell";
import { Link } from "react-router-dom";

const Level = () => {


    const numberOfBoxes = 9;
    const [boxes, setBoxes] = useState([]);
    const [minePressed, setMinePressed] = useState([]);
    const [gameCompleted, setGameCompleted] = useState([]);
    const [count, setCount] = useState([]);

    useEffect(() => {
        initiateGame();
    }, []);

    const initiateGame = () => {
        const initialBoxes = Array(numberOfBoxes).fill().map(() => ({ revealed: false, mine: false }));
        const mineIndex = Math.floor(Math.random() * numberOfBoxes);
        initialBoxes[mineIndex].mine = true;
        setBoxes(initialBoxes);
        setMinePressed(false);
        setCount(0);
        setGameCompleted(false);
    };


    const handleClick = (index) => {
        // Log for development and testing purposes otherwise should be removed.
        console.log(boxes);
        if (!minePressed && !gameCompleted && !boxes[index].revealed) {
            const newBoxes = [...boxes];
            newBoxes[index].revealed = true;

            setBoxes(newBoxes);

            if (newBoxes[index].mine) {
                setMinePressed(true);
                setGameCompleted(true);
            } else {
                setCount(count + 1);
            }

            if (newBoxes.filter((box) => box.revealed).length == numberOfBoxes - 1) {
                setGameCompleted(true);
            }
        }
    };


    const ReUsableCell = (args) => {
        const box = args.box;
        const boxBlocked = box.revealed || gameCompleted;

        if (box.revealed && box.mine) {
            return <Mine />;
        } else {
            return <button className="reuse-cell"
                style={{
                    opacity: boxBlocked ? 0.33 : 1,
                    pointerEvents: boxBlocked ? "none" : ''
                }}>
                {box.revealed ? '-' : '?'}
            </button>;
        }
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
                        <ReUsableCell box={box} />
                    </div>
                ))}
            </div>

            {gameCompleted ?
                <ReUsablePopup
                    result={minePressed ? "You lose!" : "You win!"}
                    resultText={minePressed ? "Better luck next time!" : "Do you want to try again?"}
                    reset={<button className="popup-btn one" onClick={() => initiateGame()}>Re-start</button>}
                    menu={<button className="popup-btn two"><Link to="/">Menu</Link></button>
                    } /> : ''
            }

            <div className="game_exit">
                <ButtonExitLevel className="btn-exit" label="Restart" onClick={() => initiateGame()} />
                <Link to="/">
                    <ButtonExitLevel className="btn-exit" label="Exit" />
                </Link>
            </div>

            <div className="game_score">
                <ScoreRibbon className="score-ribbon" label={count} />
            </div>
        </div>
    );

};

export default Level;
