import React from "react";
import ReactDOM from "react-dom";
import Game from "./Game";
import "./index.css";

const colors = ["red", "blue", "green", "yellow"];
ReactDOM.render(<Game colors={colors} />, document.getElementById("root"));
