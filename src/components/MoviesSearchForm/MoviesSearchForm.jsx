import { useState } from 'react';
import styles from './movie-search-form.module.scss';
import PropTypes from 'prop-types';
import Notiflix from 'notiflix';

const MoviesSearchForm = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    if (search.trim() === '') {
      setSearch('');
      return Notiflix.Notify.warning('Please write search query');
    }

    onSubmit(search);
    setSearch('');
  };

  return (
    <div className={styles.searchbar}>
      <form onSubmit={handleFormSubmit} className={styles.searchForm}>
        <input
          className={styles.searchFormInput}
          name="search"
          value={search}
          onChange={handleChange}
          type="text"
          placeholder="Movie search"
          required
        />
        <button className={styles.searchFormButton} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};
export default MoviesSearchForm;

MoviesSearchForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
