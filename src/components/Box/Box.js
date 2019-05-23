import React from "react";

export default class Box extends React.Component {
  render() {
    return (
      <div
        className="box"
        style={{ background: this.props.color }}
        id={this.props.color}
        onClick={this.props.onClick}
      />
    );
  }
}
