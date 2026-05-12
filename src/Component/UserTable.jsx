// File: UserTable.jsx
import React, { useEffect, useState } from "react";
import "./UserTable.css" // external CSS for styling

const UserTable = () => {x
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch data from API
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <div className="table-container">
      <h2>User Information</h2>
      <table className="user-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Website</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>
                <a href={`http://${user.website}`} target="_blank" rel="noreferrer">
                  {user.website}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
