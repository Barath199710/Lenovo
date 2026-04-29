import React from "react";

function Child({ name, age, email, role, location, phone, hobby }) {
  return (
    <div style={styles.card}>
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Email:</strong> {email}</p>
      <p><strong>Role:</strong> {role}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Phone:</strong> {phone}</p>
      <p><strong>Hobby:</strong> {hobby}</p>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    borderRadius: "8px",
    padding: "12px",
    margin: "10px",
    backgroundColor: "#bb6666",
    width: "250px",
  },
};

export default Child;
