import React, { useState, useEffect } from "react";
import ReUsablePopup from "./ReusablePopup";
import ScoreRibbon from "./Score";
import ButtonExitLevel from "./ExitLevel";
import Mine from "./MineCell";
import { Link } from "react-router-dom";

const Level = () => {


    // Number of boxes to visualize.
    const numberOfBoxes = 9;
    // Boxs holder and setter.
    const [boxes, setBoxes] = useState([]);
    // A flag to identify if the mine is pressed.
    const [minePressed, setMinePressed] = useState([]);
    // A flag to identify if game is completed win or lost.
    const [gameCompleted, setGameCompleted] = useState([]);
    // Score count.
    const [count, setCount] = useState([]);

    useEffect(() => {
        // Initiate the game on page load.
        initiateGame();
    }, []);

    // A method to initiate a new game values.
    const initiateGame = () => {
        // Create initial boxes array hosting box object where: 
        //  * revealed = the box is revealed.
        //  * mine = the box contains a mine.
        const initialBoxes = Array(numberOfBoxes).fill().map(() => ({ revealed: false, mine: false }));
        // Randomly find a mine index by multiplying a random float by the number of boxes, floor is used to round the flaot to integer. 
        const mineIndex = Math.floor(Math.random() * numberOfBoxes);
        // Set mine to true on using the created mine index.
        initialBoxes[mineIndex].mine = true;
        // Set the created boxes.
        setBoxes(initialBoxes);
        // Set mine pressed to false, useful in case of restart.
        setMinePressed(false);
        // Set score count to 0, useful in case of restart.
        setCount(0);
        // Set game completed to false, useful in case of restart.
        setGameCompleted(false);
    };


    // A method to handle box click.
    const handleClick = (index) => {
        // Log for development and testing purposes otherwise should be removed.
        console.log(boxes);
        // Handle only if mine is not pressed, game is not completed win/lost, and the box is not revealed.
        if (!minePressed && !gameCompleted && !boxes[index].revealed) {
            // Assign the boxes to a new const to avoid reference update.
            const newBoxes = [...boxes];
            // Set the box to revealed.
            newBoxes[index].revealed = true;

            // Update the boxes.
            setBoxes(newBoxes);

            // Special handling if a mine is pressed, setting the mine flag to true and the game completed to true.
            // Else, raise the score count by 1.
            if (newBoxes[index].mine) {
                setMinePressed(true);
                setGameCompleted(true);
            } else {
                setCount(count + 1);
            }

            // Special handling if all clean boxes are reveled, win situation, setting the game to completed.
            // Using a filter over the array on the revealed boxes, counting the revealed boxes and checking if they match the number of boxes minus one.
            if (newBoxes.filter((box) => box.revealed).length == numberOfBoxes - 1) {
                setGameCompleted(true);
            }
        }
    };


    // The box visualization.
    const ReUsableCell = (args) => {
        // Reterving the box from the arguments.
        const box = args.box;
        // A flag to identify if the box is blocked, a box is blocked if it is revealed or the game is completed.
        const boxBlocked = box.revealed || gameCompleted;

        if (box.revealed && box.mine) {
            // Return a mine view if the box is revealed and the box is a mine.
            return <Mine />;
        } else {
            // Return the view of the box using the box blocked flag, visualizing "-" if revealed and a "?" if not.  
            return <button className="reuse-cell"
                style={{
                    // Reduce the opacity if the box is blocked.
                    opacity: boxBlocked ? 0.33 : 1,
                    // Disable the mouse pointer if the box is blocked.
                    pointerEvents: boxBlocked ? "none" : ''
                }}>
                {box.revealed ? '-' : '?'}
            </button>;
        }
    };

    // Number to words method used to convert the index number to word, used to handle the classes.
    // This could be handled in a better way for sure, went for a quick solution based on the provided css.
    // We could used grid which will handle the boxes in a better way.
    const numberToWords = (number) => {
        const numbers = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
        return numbers[number];
    }

    // View rendering.
    return (
        <div className="lvlStructure">

            <div className="gameBoard">
                {/* Map the boxes to build the boxes view. */}
                {boxes.map((box, index) => (
                    <div key={index} className={'cell ' + numberToWords(index)} onClick={() => handleClick(index)} >
                        {/* Pass the box to ReUsableCell method. */}
                        <ReUsableCell box={box} />
                    </div>
                ))}
            </div>

            {/* Game completion visualization using game completed flag and mine pressed flag. */}
            {gameCompleted ?
                <ReUsablePopup
                    result={minePressed ? "You lose!" : "You win!"}
                    resultText={minePressed ? "Better luck next time!" : "Do you want to try again?"}
                    // Button to handle game restart by calling the initiate game method.
                    reset={<button className="popup-btn one" onClick={() => initiateGame()}>Restart</button>}
                    // Button to handle menu navigation by linking to the root.
                    menu={<button className="popup-btn two"><Link to="/">Menu</Link></button>
                    } /> : ''
            }

            <div className="game_exit">
                {/* Button to handle game restart by calling the initiate game method. */}
                <ButtonExitLevel className="btn-exit" label="Restart" onClick={() => initiateGame()} />
                {/* Button to handle menu navigation by linking to the root. */}
                <Link to="/">
                    <ButtonExitLevel className="btn-exit" label="Exit" />
                </Link>
            </div>

            {/* Container to visualize the game score using the count var. */}
            <div className="game_score">
                <ScoreRibbon className="score-ribbon" label={count} />
            </div>
        </div>
    );

};

export default Level;
