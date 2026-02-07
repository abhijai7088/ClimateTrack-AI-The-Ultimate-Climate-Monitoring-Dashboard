import React, { useState } from 'react';
import './Form.css';

const RegisterForm = () => {
  const [details, setDetails] = useState({ username: '', email: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Registration Form Submitted:', details);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={details.username}
          onChange={(e) => setDetails({ ...details, username: e.target.value })}
          required
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={details.email}
          onChange={(e) => setDetails({ ...details, email: e.target.value })}
          required
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={details.password}
          onChange={(e) => setDetails({ ...details, password: e.target.value })}
          required
        />
        <button type="submit" className="btn-submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterForm;
