import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMovieReviews } from 'api/films';

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
        setItems(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [movieId]);

  const elements = items.map(element => {
    const { id, author, created_at, content } = element;
    return (
      <li key={id}>
        <p>
          {created_at.slice(0, 10)} | "{author}"
        </p>
        <p>{content}</p>
      </li>
    );
  });

  return (
    <div>
      {loading && <p>...loading</p>}
      {error && <p>{error.message}</p>}
      {items.length > 0 ? (
        <ul>{elements}</ul>
      ) : (
        <p>We dont have any reviews for this movie</p>
      )}
    </div>
  );
};

export default MovieDetailsReviews;
