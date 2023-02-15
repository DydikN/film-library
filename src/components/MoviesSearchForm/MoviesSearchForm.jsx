import { useState } from 'react';

const MoviesSearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
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
