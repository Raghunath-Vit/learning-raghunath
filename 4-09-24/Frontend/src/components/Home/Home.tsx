import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Home.css'; 

const Home: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const validateForm = (): boolean => {
    const newErrors: string[] = [];
    if (username.trim() === '') {
      newErrors.push('Username is required');
    }
    if (password.trim() === '') {
      newErrors.push('Password is required');
    } else if (password.length < 8) {
      newErrors.push('Password must be at least 8 characters long');
    }

    // Trigger toast notifications for each error
    newErrors.forEach(error => toast.error(error));

    return newErrors.length === 0;
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateForm()) {
      // Handle successful login logic here
      toast.success('Login successful!');
    }
  };

  return (
    <div className="home-container">
      <div className="login-box">
        <h2 className="login-heading">Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              id="username"
              className="form-input"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              id="password"
              className="form-input"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit" className="submit-button">Login</button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Home;
