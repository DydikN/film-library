import {
  useParams,
  Link,
  Outlet,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import { useEffect, useState } from 'react';

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

  const {
    poster_path,
    title,
    vote_average,
    vote_count,
    genres,
    overview,
    release_date,
  } = movieInfo;

  let vote;
  if (vote_average) {
    vote = Math.round(vote_count);
    let xVC = String(vote);
    let sVC = xVC.split('');
    let indexVC = xVC.length - 1;
    let wVC = Math.floor(indexVC / 3);
    for (let i = 1; i <= wVC; i += 1) {
      indexVC = indexVC - 1 - i;
      sVC.splice(indexVC, 0, ' ');
      let rVC = sVC.join('');
      vote = rVC;
    }
  }

  return (
    <div>
      {loading && <p>...loading</p>}
      {error && <p>{error}</p>}
      <button onClick={goBack}>Go back</button>

      <img
        src={
          poster_path
            ? `https://image.tmdb.org/t/p/w300${poster_path}`
            : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/No_photo_available.svg/800px-No_photo_available.svg.png'
        }
        alt={title}
      />
      <h1>
        {title} ({String(release_date).slice(0, 4)})
      </h1>
      <p>
        Vote / Votes: {Number(vote_average).toFixed(1)} / {vote}
      </p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
      <p>Aditional information</p>
      <ul>
        <li>
          <Link state={{ from }} to="cast">
            Cast
          </Link>
        </li>
        <li>
          <Link state={{ from }} to="reviews">
            Reviews
          </Link>
        </li>
      </ul>

      <Outlet />
    </div>
  );
};

export default MovieDetails;
