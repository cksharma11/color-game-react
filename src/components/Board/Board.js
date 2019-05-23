import React, { useContext } from "react";
import Box from "../Box/Box";
import getRandom from "../../util";
import GameContext from "../../contexts/GameContext";

const Board = () => {
  const gameContext = useContext(GameContext.Context);
  const { gameColors = {}, score, currentColor = "", gameScoreHandler } = gameContext;

  return (
    <div className="board">
      <div id="current-color" className="text" style={{ color: gameColors[getRandom()] }}>
        {currentColor.toUpperCase()}
      </div>
      <div className="row">
        <Box color={gameColors[0]} onClick={gameScoreHandler} />
        <Box color={gameColors[1]} onClick={gameScoreHandler} />
      </div>
      <div className="row">
        <Box color={gameColors[2]} onClick={gameScoreHandler} />
        <Box color={gameColors[3]} onClick={gameScoreHandler} />
      </div>
      <div id="score" className="text" style={{ color: score >= 0 ? "green" : "red" }}>
        Score : {score}
      </div>
    </div>
  );
};

export default Board;
