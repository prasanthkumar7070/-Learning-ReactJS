import React, { useState } from "react";
import "./Form.scss";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [errorName, setErrorName] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [success, setSuccess] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    let valid = true;

    if (!name) {
      setErrorName("Name is required!");
      valid = false;
    } else {
      setErrorName("");
    }

    if (!email) {
      setErrorEmail("Email is required!");
      valid = false;
    } else {
      setErrorEmail("");
    }

    if (valid) {
      setSuccess("✅ Form submitted successfully!");
      console.log("Form Data:", { name, email });
      setName("");
      setEmail("");
    } else {
      setSuccess("");
    }
  };

  return (
    <div className="contact-us-form">
      <h2>Contact Us</h2>
      {success && <p className="success">{success}</p>}

      <form onSubmit={submitHandler}>
        <div className="form-input">
          <label>Name:</label>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          {errorName && <small className="error">{errorName}</small>}
        </div>

        <div className="form-input">
          <label>Email:</label>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {errorEmail && <small className="error">{errorEmail}</small>}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;
