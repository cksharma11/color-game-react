import React from "react";
import Board from "./components/Board/Board";
import GameContext from "./contexts/GameContext";

const Game = ({ colors }) => {
  return (
    <GameContext.Provider {...colors}>
      <Board />
    </GameContext.Provider>
  );
};

export default Game;
