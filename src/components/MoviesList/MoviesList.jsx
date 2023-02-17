import { Link, useLocation } from 'react-router-dom';
import styles from './movie-list.module.scss';

const MoviesList = ({ items }) => {
  const location = useLocation();

  const elements = items.map(
    ({ id, title, name, poster_path, release_date, vote_average }) => (
      <li key={id} className={styles['content__item']} data-id={id}>
        <Link to={`/movies/${id}`} state={{ from: location }}>
          <img
            className={styles['content__img']}
            data-id={id}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/original/${poster_path}`
                : 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/No_photo_available.svg/800px-No_photo_available.svg.png'
            }
            alt={title}
          />
          <div className={styles['box-description']}>
            <h2 className={styles['content__title']}>{title || name}</h2>
            <p className={styles['content__text']}>
              {release_date.slice(0, 4)}
            </p>
            <p className={styles['content__popularity']}>
              {vote_average.toFixed(1)}
            </p>
          </div>
        </Link>
      </li>
    )
  );

  return <ul className={styles.content__list}>{elements}</ul>;
};

export default MoviesList;

MoviesList.defaultProps = {
  items: [],
};
