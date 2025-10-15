import axios from "axios";
import React, { useEffect, useState } from "react";

const Axios = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response.data); // just to see the data in console
      setUsers(response.data); // save data in state
    });
  }, []);
  return (
    <div>
      <div style={{ textAlign: "center", marginTop: "30px" }}>
        <h2>Basic Axios Example</h2>
        <ul style={{ listStyle: "none", padding: 0 }}>
          {users.map((user) => (
            <li
              key={user.id}
              style={{
                background: "#f3f3f3",
                margin: "10px auto",
                padding: "10px",
                width: "300px",
                borderRadius: "8px",
              }}
            >
              {user.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Axios;
