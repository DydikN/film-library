import { Link } from 'react-router-dom';

const MoviesList = ({ items }) => {
  const elements = items.map(({ id, title, name }) => (
    <li key={id}>
      <Link to={`/movies/${id}`}>{title || name}</Link>
    </li>
  ));

  return <ul>{elements}</ul>;
};

export default MoviesList;

MoviesList.defaultProps = {
  items: [],
};
