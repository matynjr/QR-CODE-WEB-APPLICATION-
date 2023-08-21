import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';


export default function Signup() {
  const navigateTo = useNavigate();
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [email, setEmail] = useState('');
  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value);
  };
  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (password === confirmPassword) {
    //   console.log('Submitted:', username, password, email);
      // Here you can add your signup logic, e.g. API calls to create a new user.
      navigateTo('/loggin');

    } else {
      alert('Passwords do not match.');
    }
  };

  return (
    <div className='SignUpForm'>
      <h2>Create Account</h2>
      <form onSubmit={handleSubmit}>
      <div className='holder'>
          <label>Firstname:</label>
          <input
            type="text"
            value={firstname}
            onChange={handleFirstnameChange}
            required
          />
        </div>
        <div className='holder'>
          <label>Lastname:</label>
          <input
            type="text"
            value={lastname}
            onChange={handleLastnameChange}
            required
          />
        </div>
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
        <div className='holder'>
          <label>Confirm Password:</label>
          <input placeholder=''
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            required
          />
        </div>
        <div className='holder'>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <button className='btn' type="submit">Sign Up</button>
      </form>
    </div>
  );
}
