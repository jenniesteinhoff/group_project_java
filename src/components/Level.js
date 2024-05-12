import React, { useState } from "react";
import ReUsableCell from "./ReusableCell";
import ScoreRibbon from "./Score";
import ReUsableButton from "./ReusableButton";
import ButtonExit from "./Exit";
import Bomb from "./Bomb";



const Level = () => {

    const [showBomb, setShowBomb] = useState(false);
    const [gameScore, setGameScore] = useState(0);



    const handleBox1Click = () => {

        console.log ("Cell 1 has been pressed...");
    };
    const handleBox2Click = () => {
        console.log ("Cell 2 has been pressed...");
    };
    const handleBox3Click = () => {
        console.log ("Cell 3 has been pressed...");
    };
    const handleBox4Click = () => {
        console.log ("Cell 4 has been pressed...");
    };
    const handleBox5Click = () => {
        console.log ("Cell 5 has been pressed...");
    };
    const handleBox6Click = () => {
        console.log ("Cell 6 has been pressed...");
    };
    const handleBox7Click = () => {
        console.log ("Cell 7 has been pressed...");
    };
    const handleBox8Click = () => {
        console.log ("Cell 8 has been pressed...");
    };
    const handleBox9Click = () => {
        setShowBomb(true);
        console.log ("Bomb has been pressed...");
    };




    const submit = () => {
        console.log ("You have exited...");
    };

    return (
            <div className="lvlStructure">

                <div className="gameBoard">
                    <div className="cell one"><ReUsableCell onClick={handleBox1Click}/></div>
                    <div className="cell two"><ReUsableCell onClick={handleBox2Click}/></div>
                    <div className="cell three"><ReUsableCell onClick={handleBox3Click}/></div>
                    <div className="cell four"><ReUsableCell onClick={handleBox4Click}/></div>
                    <div className="cell five"><ReUsableCell onClick={handleBox5Click}/></div>
                    <div className="cell six"><ReUsableCell onClick={handleBox6Click}/></div>
                    <div className="cell seven"><ReUsableCell onClick={handleBox7Click}/></div>
                    <div className="cell eight"><ReUsableCell onClick={handleBox8Click}/></div>
                    <div className="cell nine"><ReUsableCell onClick={handleBox9Click}/></div>
                    {showBomb && (<Bomb/>)}
                </div>

                <div className="game_score"><ScoreRibbon className="score-ribbon"/></div>
                <div className="game_exit"><ButtonExit className="btn-exit" label="Exit" onClick={submit}/></div>
            </div> 
    );
};

export default Level;