import React from "react";

const Cell = ({ value, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        width: "100px",
        height: "100px",
        background: "#f0f0f0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "2em",
        border: "2px solid #333",
        cursor: value ? "not-allowed" : "pointer"
      }}
    >
      {value}
    </div>
  );
};

export default Cell;
