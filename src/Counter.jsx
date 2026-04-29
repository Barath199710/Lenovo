import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <div style={styles.container}>
      <h2>Counter Value: {count}</h2>
      <div style={styles.buttons}>
        <button onClick={increment} style={styles.btn}>Increment</button>
        <button onClick={decrement} style={styles.btn}>Decrement</button>
        <button onClick={reset} style={styles.btn}>Reset</button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    margin: "20px",
    padding: "20px",
    border: "2px solid #ccc",
    borderRadius: "10px",
    backgroundColor: "#f9f9f9",
  },
  buttons: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
    marginTop: "15px",
  },
  btn: {
    padding: "10px 15px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#007bff",
    color: "white",
    fontWeight: "bold",
  },
};

export default Counter;
