import React from "react";
import Board from "./components/Board";
import lodash from "lodash";

export default class ColorGame extends React.Component {
  constructor(props) {
    super(props);
    this.colors = props.colors;
    this.points = 0;
    this.state = {
      points: this.points,
      currentColor: this.colors[this.getRandomColorIndex()]
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
        score={this.state.points}
        onClick={this.updateScore.bind(this)}
      />
    );
  }

  updateScore(event) {
    event.target.id === this.state.currentColor
      ? (this.points = this.points + 10)
      : (this.points = this.points - 10);

    this.updateState();
  }

  updateState(){
    this.shuffleColors();
    this.setState({
      points: this.points,
      currentColor: this.colors[this.getRandomColorIndex()]
    });
  }

  getRandomColorIndex() {
    return Math.floor(Math.random() * 4);
  }
}