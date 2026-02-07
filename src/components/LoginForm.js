import React, { useState } from 'react';
import './Form.css';

const LoginForm = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Login Form Submitted:', credentials);
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <label>Username</label>
        <input
          type="text"
          placeholder="Enter your username"
          value={credentials.username}
          onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
          required
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={credentials.password}
          onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
          required
        />
        <button type="submit" className="btn-submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
