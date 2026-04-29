import React, { useState } from "react";

function UserStatus() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <div style={styles.container}>
      {isUserLoggedIn ? (
        <div style={styles.welcome}>
          <h2>Welcome Back 🎉</h2>
          <button onClick={() => setIsUserLoggedIn(false)} style={styles.btn}>
            Logout
          </button>
        </div>
      ) : (
        <div style={styles.login}>
          <h2>Please Login 🔑</h2>
          <button onClick={() => setIsUserLoggedIn(true)} style={styles.btn}>
            Login
          </button>
        </div>
      )}
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
    backgroundColor: "#f1f1f1",
  },
  welcome: { color: "green" },
  login: { color: "red" },
  btn: {
    marginTop: "10px",
    padding: "8px 12px",
    borderRadius: "5px",
    border: "none",
    cursor: "pointer",
    backgroundColor: "#28a745",
    color: "white",
    fontWeight: "bold",
  },
};

export default UserStatus;
