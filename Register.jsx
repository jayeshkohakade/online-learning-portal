import React, { useState } from "react";
import axios from "axios";
import "./App1.css";

const Register = ({ setShowRegister }) => {
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/register", formData);
      setMessage(response.data.message);
    } catch (error) {
      setMessage("Registration failed");
    }
  };

  return (
    <div className="signin-container">
      <h2>Register</h2>
      {message && <p className="success-message">{message}</p>}
      <form onSubmit={handleSubmit}>
      <div className="form-group">
          <label>Name:</label>
          <input type="name" name="name" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" name="password" onChange={handleChange} required />
        </div>
        <button type="submit" className="signin-btn">Register</button>
      </form>
      <p className="create-account">
        Already have an account?{" "}
        <button onClick={() => setShowRegister(false)} className="register-btn">
          Sign In
        </button>
      </p>
    </div>
  );
};

export default Register;
