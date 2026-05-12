import React from "react";
import Cell from "./Cell";

const Board = ({ cells, onCellClick }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 100px)",
        gridTemplateRows: "repeat(3, 100px)",
        gap: "5px",
        justifyContent: "center",
        margin: "20px auto"
      }}
    >
      {cells.map((value, index) => (
        <Cell
          key={index}
          value={value}
          onClick={() => onCellClick(index)}
        />
      ))}
    </div>
  );
};

export default Board;
