import React from "react";
import ReactDOM from "react-dom";
import lodash from "lodash";
import "./index.css";

const colors = ["red", "blue", "green", "yellow"];

class ColorGame extends React.Component {
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
    event.target.id == this.state.currentColor
      ? (this.points = this.points + 10)
      : (this.points = this.points - 10);

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

const Box = function(props) {
  return (
    <div
      className="box"
      style={{ background: props.color }}
      id={props.color}
      onClick={props.onClick}
    />
  );
};

const getRandom = function(){
  return Math.floor(Math.random() * 4);
}

const Board = function(props) {
  return (
    <div className="board">
      <div id="current-color" className="text" style={{ color: props.colors[getRandom()] }}>
        {props.currentColor.toUpperCase()}
      </div>
      <div className="row">
        <Box color={props.colors[0]} onClick={props.onClick} />
        <Box color={props.colors[1]} onClick={props.onClick} />
      </div>
      <div className="row">
        <Box color={props.colors[2]} onClick={props.onClick} />
        <Box color={props.colors[3]} onClick={props.onClick} />
      </div>
      <div id="score" className="text">
        Score : {props.score}
      </div>
    </div>
  );
};

ReactDOM.render(<ColorGame colors={colors} />, document.getElementById("root"));
