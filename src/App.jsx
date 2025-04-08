import React, { useState } from 'react';
import Row from './components/Row';
import Login from './components/Login';
import movies from './api/request';
import './styles/App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="App">
      <Row title="Trending Now" movies={movies} />
      <Row title="Top Picks" movies={movies} />
      <Row title="New Releases" movies={movies} />
    </div>
  );
}

export default App;
// Additional rows can be added here if needed
<Row title="Popular Movies" movies={movies} />