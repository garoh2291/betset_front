import React, { useState } from "react";
import { GameFilter } from "./GameFilter";
import { MainTable } from "./MainTable";
import "./styles.css";

export const Table = () => {
  const [isFilterVisible, setIsFilterVisible] = useState(true);
  return (
    <div className="table_wrapper">
      <GameFilter visible={isFilterVisible} setVisible={setIsFilterVisible} />
      <MainTable visible={isFilterVisible} />
    </div>
  );
};
