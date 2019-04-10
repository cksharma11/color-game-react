import React from "react";
import Board from "./components/Board";
import getRandom from "./util";
import lodash from "lodash";


export default class Game extends React.Component {
  constructor(props) {
    super(props);
    this.colors = props.colors;
    this.score = 0;
    this.state = {
      score: this.score,
      currentColor: this.colors[getRandom()]
    };
  }

  shuffleColors() {
    this.colors = lodash.shuffle(this.colors);
  }

  render() {
    return (
      <Board
        colors={this.colors}
        currentColor={this.state.currentColor}
        score={this.state.score}
        onClick={this.updateScore.bind(this)}
      />
    );
  }

  updateScore(event) {
    event.target.id === this.state.currentColor
      ? (this.score = this.score + 10)
      : (this.score = this.score - 10);

    this.updateState();
  }

  updateState(){
    this.shuffleColors();
    this.setState({
      score: this.score,
      currentColor: this.colors[getRandom()]
    });
  }
}