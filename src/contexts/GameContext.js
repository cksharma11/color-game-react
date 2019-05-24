import { useState } from "react";
import createContainer from "constate";
import getRandom from "../util";
import lodash from "lodash";

const useGameContext = ({ colors }) => {
  const [gameColors, setGameColors] = useState(colors);
  const [score, setScore] = useState(0);
  const [currentColor, setCurrentColor] = useState(colors[getRandom()]);

  const gameScoreHandler = event => {
    let latestScore = score;
    let colors = lodash.shuffle(gameColors);

    event.target.id === currentColor
      ? (latestScore = latestScore + 10)
      : (latestScore = latestScore - 10);

    setScore(latestScore);
    setCurrentColor(colors[getRandom()]);
    setGameColors(colors);
  };

  return {
    gameColors,
    score,
    currentColor,
    gameScoreHandler
  };
};

const GameContext = createContainer(useGameContext);
export { useGameContext };
export default GameContext;
