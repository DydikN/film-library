import { useEffect, useState } from 'react';
import { getMovies } from 'api/films';

import MoviesList from 'components/MoviesList/MoviesList';
import Loader from 'components/Loader/Loader';
import Notiflix from 'notiflix';

import styles from './home-page.module.scss';

const HomePage = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const { results } = await getMovies();

        setItems(results);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1 className={styles.title}>Trending today</h1>
      {loading && <Loader />}

      {error && Notiflix.Block(`${error.message} `)}

      {items.length > 0 && <MoviesList items={items} />}
    </div>
  );
};

export default HomePage;
