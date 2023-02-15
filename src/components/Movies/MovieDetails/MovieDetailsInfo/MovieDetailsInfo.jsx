import { Link } from 'react-router-dom';

const MovieDetailsInfo = ({ url, tag, title, score, overview, genres }) => {
  const src = `https://www.themoviedb.org/t/p/w300${url}`;

  const userScore = () => {
    const scoreMath = score * 10;
    return scoreMath.toFixed(0);
  };

  return (
    <div>
      <img src={src && src} alt={tag} />
      <h1>{title}</h1>
      <p>User Score {userScore()}%</p>
      <h2>Overview</h2>
      <p>{overview}</p>
      <h3>Genres</h3>
      {genres && genres.map(genre => <li key={genre.id}>{genre.name}</li>)}
      <p>Aditional information</p>
    </div>
  );
};
export default MovieDetailsInfo;
