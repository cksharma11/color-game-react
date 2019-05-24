import React from "react";
import PropTypes from "prop-types";
import Board from "./components/Board/Board";
import GameContext from "./contexts/GameContext";

const Game = ({ colors }) => {
  return (
    <GameContext.Provider colors={colors}>
      <Board />
    </GameContext.Provider>
  );
};

Game.propTypes = {
  colors: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Game;
