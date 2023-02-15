import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { getMovieCredits } from 'components/api/films';
import MovieDetailsCastList from './MovieDetailsCastList/MovieDetailsCastList';

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
  return (
    <div>
      {loading && <p>...loading</p>}
      {error && <p>{error.message}</p>}
      <MovieDetailsCastList items={items} />
    </div>
  );
};

export default MovieDetailsCast;
