import React from "react";
import ReactDOM from "react-dom";
import ColorGame from "./ColorGame";
import "./index.css";

const colors = ["red", "blue", "green", "yellow"];
ReactDOM.render(<ColorGame colors={colors} />, document.getElementById("root"));
