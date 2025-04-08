import React from 'react';
import { useLocation } from 'react-router-dom';
import './MovieList.css';
// import './MovieDetail.css';

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

export { MovieDetail };


const MovieList = ({ movies, onMovieClick }) => {
    return (
        <div className="movie-list-container">
            <h2 className="movie-list-title">Browse Movies</h2>
            <div className="movie-grid">
                {movies.map((movie) => (
                    <div key={movie.id} className="movie-card" onClick={() => onMovieClick(movie)}>
                        <img src={movie.poster_path} alt={movie.title} />
                        <div className="movie-title-overlay">{movie.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MovieList;
