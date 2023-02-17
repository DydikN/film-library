import { useState } from 'react';
import PropTypes from 'prop-types';

const MoviesSearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value.trim());
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    onSubmit(search);
    setSearch('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <input
        name="search"
        value={search}
        onChange={handleChange}
        type="text"
        required
      />
      <button type="submit">Search</button>
    </form>
  );
};
export default MoviesSearchForm;

MoviesSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
