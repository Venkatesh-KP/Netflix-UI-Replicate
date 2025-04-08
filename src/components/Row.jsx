import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Row.css';

const Row = ({ title, movies }) => {
  const navigate = useNavigate();

  const handleClick = (movie) => {
    navigate(`/movie/${movie.id}`, { state: { movie } });
  };

  return (
    <div className="row">
      <h2 className="row-title">{title}</h2>
      <div className="row-posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className="row-poster"
            src={movie.poster_path}
            alt={movie.title}
            onClick={() => handleClick(movie)}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;
