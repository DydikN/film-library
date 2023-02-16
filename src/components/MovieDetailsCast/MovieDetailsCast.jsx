import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'api/films';

const MovieDetailsCast = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { cast } = await getMovieCredits(movieId);
        setItems(cast);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [movieId]);

  const elements = items.map(element => {
    const { cast_id, profile_path, name, character } = element;
    return (
      <li key={cast_id}>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : 'https://t4.ftcdn.net/jpg/00/65/10/47/360_F_65104718_x17a76wzWKIm3BlhA6uyYVkDs9982c6q.jpg'
          }
          alt={name}
        />
        <h2>{name}</h2>
        <p>
          <span>Character: </span>
          {character}
        </p>
      </li>
    );
  });

  return (
    <div>
      {loading && <p>...loading</p>}
      {error && <p>{error.message}</p>}
      <ul>{elements}</ul>
    </div>
  );
};

export default MovieDetailsCast;
