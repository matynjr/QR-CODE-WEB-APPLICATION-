import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Loggin() {
 const navigateTo = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    navigateTo('/qrcodereader');
    // console.log('Submitted:', username, password);
  };

  return (
    <div className ="LoginForm">
      <h2>Login into your account</h2>
      <form onSubmit={handleSubmit}>
        <div className='holder'>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}

            required
          />
        </div>
        <div className='holder'>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}

            required
          />
        </div>
        <button className="btn" type="submit">Login</button>
      </form>
    </div>
  );
}
