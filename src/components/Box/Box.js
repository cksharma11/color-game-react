import React from "react";

const Box = ({ color = "", onClick = () => {} }) => {
  return (
    <div className="box" style={{ background: color }} id={color} onClick={onClick} />
  );
};

export default Box;
