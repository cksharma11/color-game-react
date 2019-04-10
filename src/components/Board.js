import React from "react";
import Box from "./Box";
import getRandom from "../util";

export default class Board extends React.Component {
  render() {
    return (
      <div className="board">
        <div
          id="current-color"
          className="text"
          style={{ color: this.props.colors[getRandom()] }}
        >
          {this.props.currentColor.toUpperCase()}
        </div>
        <div className="row">
          <Box color={this.props.colors[0]} onClick={this.props.onClick} />
          <Box color={this.props.colors[1]} onClick={this.props.onClick} />
        </div>
        <div className="row">
          <Box color={this.props.colors[2]} onClick={this.props.onClick} />
          <Box color={this.props.colors[3]} onClick={this.props.onClick} />
        </div>
        <div
          id="score"
          className="text"
          style={{ color: this.props.score >= 0 ? "green" : "red" }}
        >
          Score : {this.props.score}
        </div>
      </div>
    );
  }
}
