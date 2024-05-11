import React from "react";
import Board from "./Board";


//The Game component holds the state of the app to check if a game is in progress or not.

class Game extends React.Component {
    state = {
        gameInProgress: false
    };

//the Game component also starts a new  game.

startGame = () => {
    this.setState({ gameInProgress: true });
};

exitGame = () => {
    this.setState({ gameInProgress: false });
};

 render() {
        return (
            <div>
                {this.state.gameInProgress? (
                    <Board exitGame={this.exitGame} />
                ) : (
                    <button onClick={this.startGame}>Start Game</button>
                )}
            </div>
        );
    }
}
export default Game;