import { Link, useLocation } from 'react-router-dom';

const MoviesList = ({ items }) => {
  const location = useLocation();
  const elements = items.map(({ id, title, name }) => (
    <li key={id}>
      <Link to={`/movies/${id}`} state={{ from: location }}>
        {title || name}
      </Link>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default MoviesList;

MoviesList.defaultProps = {
  items: [],
};
