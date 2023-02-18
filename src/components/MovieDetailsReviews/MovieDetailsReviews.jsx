import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMovieReviews } from 'api/films';
import Loader from 'components/Loader/Loader';
import styles from './movie-details-reviews.module.scss';

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
      <li key={id} className={styles.box__reviews}>
        <p className={styles.reviews__name}>
          {created_at.slice(0, 10)} | "{author}"
        </p>
        <p className={styles.reviews__text}>{content}</p>
      </li>
    );
  });

  return (
    <div>
      {loading && <Loader />}
      {error && <p>{error.message}</p>}
      {items.length > 0 ? (
        <ul className={styles.reviews__wrapper}>{elements}</ul>
      ) : (
        <p>We dont have any reviews for this movie</p>
      )}
    </div>
  );
};

export default MovieDetailsReviews;
