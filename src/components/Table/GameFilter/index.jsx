import React from "react";
import "./styles.css";

export const GameFilter = ({ visible, setVisible }) => {
  return (
    <div className={`game_filter_wrapper ${visible ? "full" : "half"}`}></div>
  );
};
