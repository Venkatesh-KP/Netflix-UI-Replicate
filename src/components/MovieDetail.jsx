import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './MovieList.css';
import './MovieDetail.css'; // ✅ This points to the new CSS file


const MovieDetail = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { movie } = location.state;

  return (
    <div className="movie-detail">
      <button className="back-button" onClick={() => navigate(-1)}>
        Back
      </button>
      <h2>{movie.title}</h2>
      <img src={movie.backdrop_path} alt={movie.title} />
      <p className="summary">{movie.summary}</p>
      <div className="cast">
        <h3>Cast:</h3>
        <ul>
          {movie.cast.map((actor, index) => (
            <li key={index}>{actor}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default MovieDetail;