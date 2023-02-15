import { Link } from 'react-router-dom';

const GoBackButton = ({ to }) => {
  return (
    <Link to={to}>
      <button>Go back</button>
    </Link>
  );
};

export default GoBackButton;
