import React, { useState } from 'react';
import Row from './components/Row';
import Login from './components/Login';
import movies from './api/request';
import './styles/App.css';

import { Routes, Route } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';

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
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Row title="Trending Now" movies={movies} />
              <Row title="Top Picks" movies={movies} />
              <Row title="New Releases" movies={movies} />
            </>
          }
        />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  );
}

export default App;
