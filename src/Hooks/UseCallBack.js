import axios from "axios";
import React, { useEffect, useState, useCallback } from "react";

const UseCallback = () => {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  const url = "https://jsonplaceholder.typicode.com/users";

  // Fetch users from API once
  useEffect(() => {
    axios.get(url).then((response) => {
      setUsers(response.data);
    });
  }, []);

  //By using the useCallback hook, we can memoize the functions and only recreate them when their dependencies change.
  //useCallback memoizes the function so it's not recreated on every render
  
  const filterUsers = useCallback(() => {
    return users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]); // dependencies → runs only when users or search changes

  const filteredList = filterUsers();

  return (
    <div className="usecallback-list-container">
      <h1>User Search (useCallback Example)</h1>

      <input
        type="text" 
        placeholder="Search user..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
   
      <ul>
        {filteredList.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  ); 
};

export default UseCallback;
