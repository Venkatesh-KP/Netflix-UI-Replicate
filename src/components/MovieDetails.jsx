import React from 'react';
import { useLocation } from 'react-router-dom';
import './MovieDetail.css';

const MovieDetail = () => {
  const location = useLocation();
  const movie = location.state?.movie;

  if (!movie) return <div>Movie not found</div>;

  return (
    <div className="movie-detail">
      <img
        src={movie.backdrop_path}
        alt={movie.title}
        className="backdrop"
      />
      <div className="info">
        <h1>{movie.title}</h1>
        <p>{movie.summary}</p>
        <p><strong>Cast:</strong> {movie.cast.join(', ')}</p>
      </div>
    </div>
  );
};

export default MovieDetail;
