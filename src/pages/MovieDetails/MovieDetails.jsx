import {
  useParams,
  NavLink,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';

import Loader from 'components/Loader/Loader';
import styles from './movie-details.module.scss';

import { getMovieDetails } from 'api/films';

const MovieDetails = () => {
  const [movieInfo, setMovieInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const { movieId } = useParams();

  const navigate = useNavigate();

  const location = useLocation();
  const from = location.state?.from || '/';

  const goBack = () => {
    navigate(from);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const result = await getMovieDetails(movieId);
        setMovieInfo(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [movieId]);

  const { poster_path, title, vote_average, genres, overview, name } =
    movieInfo;

  return (
    <div>
      {loading && <Loader />}
      {error && <p>{error}</p>}
      <button type="button" className={styles.button} onClick={goBack}>
        GoBack
      </button>
      <div>
        <div className={styles.container}>
          <img
            className={styles.image}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/No_photo_available.svg/800px-No_photo_available.svg.png'
            }
            alt={title || name}
            widht="300"
            height="450"
          />

          <div className={styles.box}>
            <h2 className={styles.title}>{title || name} </h2>
            <p className={styles.rating}>
              User Score:
              <span className={styles.descr}>
                {Number(vote_average).toFixed(1)}
              </span>
            </p>
            <p className={styles.subtitle}>
              Overview:
              <span className={styles.descr}>{overview}</span>
            </p>
            <p className={styles.subtitle}>
              Genres:
              <span className={styles.genres}>
                {genres && genres.map(genre => genre.name).join(' / ')}
              </span>
            </p>
          </div>
        </div>
      </div>
      <p>Aditional information</p>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
            state={{ from }}
            to="cast"
          >
            Cast
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.activeLink : styles.link
            }
            state={{ from }}
            to="reviews"
          >
            Reviews
          </NavLink>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
