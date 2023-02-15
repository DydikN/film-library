import { useParams, Link, Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { getMovieDetails } from 'components/api/films';
import MovieDetailsInfo from './MovieDetailsInfo/MovieDetailsInfo';

const MovieDetails = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const result = await getMovieDetails(movieId);
        setItem(result);
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
      <MovieDetailsInfo
        url={item.poster_path}
        tag={item.title}
        title={item.title}
        score={item.vote_average}
        overview={item.overview}
        genres={item.genres}
      />

      <ul>
        <li>
          <Link to={`/movies/${movieId}/cast`}>Cast</Link>
        </li>
        <li>
          <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
