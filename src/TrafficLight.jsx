import React, { useReducer, useEffect } from "react";

// Define states
const LIGHTS = ["RED","YELLOW","GREEN"];

// Reducer function
function reducer(state, action) {
  switch (action.type) {
    case "NEXT":
      if (state === "RED") return "YELLOW";
      if (state === "YELLOW") return "GREEN";
      if (state === "GREEN") return "RED";
      return state;
    case "RESET":
      return "RED";
    default:
      return state;
  }
}

export default function TrafficLight() {
  const [light, dispatch] = useReducer(reducer, "RED");

  // Bonus: Auto change every 3s (toggleable)
  const [auto, setAuto] = React.useState(false);

  useEffect(() => {
    let timer;
    if (auto) {
      timer = setInterval(() => {
        dispatch({ type: "NEXT" });
      }, 3000);
    }
    return () => clearInterval(timer);
  }, [auto]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Traffic Light Controller</h2>

      {/* Traffic Light UI */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        {LIGHTS.map((color) => (
          <div
            key={color}
            style={{
              width: "80px",
              height: "80px",
              borderRadius: "50%",
              margin: "10px",
              backgroundColor: light === color ? color.toLowerCase() : "#ccc",
              boxShadow: light === color ? "0 0 20px " + color.toLowerCase() : "none",
            }}
          ></div>
        ))}
      </div>

      {/* Controls */}
      <div style={{ marginTop: "20px" }}>
        <button onClick={() => dispatch({ type: "NEXT" })}>Next</button>
        <button onClick={() => dispatch({ type: "RESET" })} style={{ marginLeft: "10px" }}>
          Reset
        </button>
        <button onClick={() => setAuto(!auto)} style={{ marginLeft: "10px" }}>
          {auto ? "Pause" : "Start"}
        </button>
      </div>
    </div>
  );
}
