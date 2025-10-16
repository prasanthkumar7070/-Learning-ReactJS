import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import "./Hooks.css";

const UseMemo = () => {
  const [users, setUsers] = useState([]);     
  const [searchTerm, setSearchTerm] = useState(""); // store user input

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      console.log(response.data);
      setUsers(response.data);
    });
  }, []);

  // useMemo to filter users efficiently
  const filterUsers = useMemo(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);
   
  return (
    <div className="usememo-list-container">
      <h1>User Search (useMemo Example)</h1>

      <input
        type="text"
        placeholder="Search user..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      <ul>
        {filterUsers.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemo;
