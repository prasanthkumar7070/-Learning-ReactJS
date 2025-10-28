import axios from "axios";
import React, { useEffect, useState } from "react";

const Axios = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos?_limit=12")
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }} className="axios-sec">
      <h2 className="text-white">Basic Axios Example</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "20px",
          margin: "30px",
        }}
      >
        {users.map((user) => (
          <div
            key={user.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "10px",
              padding: "10px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
              backgroundColor: "#f9f9f9",
            }}
          >
            <div
              style={{
                borderRadius: "8px",
                width: "100%",
                height: "100px",
                backgroundColor: "gray",
              }}
            >
              <img src={user.thumbnailUrl} alt="No-Image" />
            </div>
            <p style={{ fontSize: "14px", marginTop: "8px" }}>
              {user.title.substring(0, 45)}...
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Axios;
