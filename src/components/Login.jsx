import React, { useState, useEffect } from 'react';

function Login({ onLogin }) {
  const [isRegistering, setIsRegistering] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Load users from localStorage on component mount
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isRegistering) {
      const userExists = users.some((u) => u.username === username);
      if (userExists) {
        alert('Username already exists');
        return;
      }

      const updatedUsers = [...users, { username, password }];
      setUsers(updatedUsers);
      localStorage.setItem('users', JSON.stringify(updatedUsers)); // ✅ Save to localStorage
      alert('Registered successfully! You can now log in.');
      setIsRegistering(false);
    } else {
      const validUser = users.find(
        (u) => u.username === username && u.password === password
      );

      if (validUser) {
        onLogin();
      } else {
        alert('Invalid username or password');
      }
    }

    setUsername('');
    setPassword('');
  };

  return (
    <div className="login-container">
      <h2>{isRegistering ? 'Register' : 'Login'}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isRegistering ? 'Register' : 'Login'}</button>
      </form>
      <p>
        {isRegistering ? 'Already have an account?' : 'New user?'}{' '}
        <button type="button" onClick={() => setIsRegistering(!isRegistering)}>
          {isRegistering ? 'Login here' : 'Register here'}
        </button>
      </p>
    </div>
  );
}

export default Login;
