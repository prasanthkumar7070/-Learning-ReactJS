import React, { useEffect, useState } from "react";
import "./FetchingAPI.css";
import axios from "axios";

const JSONPlaceHolder = () => {
  const [user, setUser] = useState([]);
  const [name, setName] = useState("");

  const data = "https://jsonplaceholder.typicode.com/users";

  // ✅ Fetch existing users (Read)
  useEffect(() => {
    axios.get(data).then((response) => {
      setUser(response.data);
    });
    
  }, []);

  // ✅ Add new user (Create)
  const addUser = () => {
    const newUser = { id: Date.now(), name };
    // Update UI instantly
    setUser([...user, newUser]);

    // Simulate backend save
    fetch(data, {
      method: "POST", //POST method is used to create new data
      body: JSON.stringify(newUser), // Convert JS object to JSON string
      headers: { "Content-Type": "application/json" }, //
    }).catch((err) => console.error("Error adding user:", err));

    setName("");
  };

  // ✅ Update user (Update)
  const updateUser = (id) => {
    const updatedUser = { id, name: name || "Updated User" }; // Fallback name if input is empty

    setUser(user.map((u) => (u.id === id ? updatedUser : u))); // Update UI instantly

    fetch(`${data}/${id}`, {
      method: "PUT", //PUT method is used to update existing data
      body: JSON.stringify(updatedUser),
      headers: { "Content-Type": "application/json" },
    }).catch((err) => console.error("Error updating user:", err));
  };

  // ✅ Delete user (Delete)
  const deleteUser = (id) => {
    setUser(user.filter((u) => u.id !== id)); // Update UI instantly
    fetch(`${data}/${id}`, {
      method: "DELETE",
    }).catch((err) => console.error("Error deleting user:", err));
  };

  return (
    <div className="fetching-api">
      <h2>Fetching API</h2>
      <div className="input-box">
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter name"
        />
        <button onClick={addUser}>Add</button>
      </div>

      <div className="row">
        {user.map((u) => (
          <div key={u.id} className="col-md-4 mb-3">
            <div className="user-card p-3">
              <p className="mb-2 fw-bold">{u.name}</p>
              <div className="actions">
                <button
                  onClick={() => updateUser(u.id)}
                  className="btn btn-primary me-2"
                >
                  Update
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteUser(u.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JSONPlaceHolder;
