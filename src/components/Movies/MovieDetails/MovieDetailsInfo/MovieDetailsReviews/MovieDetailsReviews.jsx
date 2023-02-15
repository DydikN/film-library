import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMovieReviews } from 'components/api/films';

import MovieDetailsReviewsList from './MovieDetailsReviewsList/MovieDetailsReviewsList';

const MovieDetailsReviews = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { results } = await getMovieReviews(movieId);
        console.log(results);
        setItems(results);
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
      <MovieDetailsReviewsList items={items} />
    </div>
  );
};

export default MovieDetailsReviews;
