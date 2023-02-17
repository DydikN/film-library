import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';

import { getMovieCredits } from 'api/films';

import styles from './movie-details-cast.module.scss';

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
      <li key={cast_id} className={styles.box__cast}>
        <img
          src={
            profile_path
              ? `https://image.tmdb.org/t/p/w500${profile_path}`
              : 'https://t4.ftcdn.net/jpg/00/65/10/47/360_F_65104718_x17a76wzWKIm3BlhA6uyYVkDs9982c6q.jpg'
          }
          alt={name}
          className={styles.cast__img}
        />
        <h2 className={styles.cast__title}>{name}</h2>
        <p>
          <span className={styles.cast__span}>Character: </span>
          {character}
        </p>
      </li>
    );
  });

  return (
    <div>
      {loading && <Loader />}
      {error && <p>{error.message}</p>}
      <ul className={styles.cast__box__wrapper}>{elements}</ul>
    </div>
  );
};

export default MovieDetailsCast;
