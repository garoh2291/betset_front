import React from "react";
import "./styles.css";

export const MainTable = ({ visible }) => {
  return (
    <div
      className={`main_table_wrapper ${
        visible ? "half_table" : "visible_table"
      }`}
    >
      hello
    </div>
  );
};
