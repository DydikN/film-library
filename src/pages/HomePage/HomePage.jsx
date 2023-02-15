import { useEffect, useState } from 'react';
import { getMovies } from 'api/films';

import MoviesList from 'components/MoviesList/MoviesList';

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
      <h1>Trending today</h1>
      {items.length > 0 && <MoviesList items={items} />}
      {loading && <p>...loading</p>}
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default HomePage;
