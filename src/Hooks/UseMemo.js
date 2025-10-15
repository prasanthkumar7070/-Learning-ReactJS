import React, { useState, useMemo } from "react";
import "./Hooks.css";

const UseMemo = () => {
  const [search, setSearch] = useState("");

  // Dummy data (imagine this as a large dataset)
  const users = [
    "Prasanth",
    "Kumar",
    "Arjun",
    "Sneha",
    "Divya",
    "Rahul",
    "Ananya",
    "Suresh",
    "Meena",
    "Vijay",
  ];
  
  // when filtering a large list or doing complex calculations, useMemo stores the previous results and only updates them when needed — reducing rendering time and improving user experience

  const filteredUsers = useMemo(() => {
    console.log("Filtering users...");
    return users.filter((user) =>
      user.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="usememo-list-container">
      <h1>User Search (useMemo Example)</h1>
      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filteredUsers.map((user, index) => (
          <li key={index}>{user}</li>
        ))}
      </ul>
    </div>
  );
};

export default UseMemo;
