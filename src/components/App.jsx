import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import Loader from './Loader/Loader';
import styles from './app.module.scss';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));
const MovieDetailsCast = lazy(() =>
  import('./MovieDetailsCast/MovieDetailsCast')
);
const MovieDetailsReviews = lazy(() =>
  import('./MovieDetailsReviews/MovieDetailsReviews')
);

const Menu = lazy(() => import('./Menu/Menu'));

function App() {
  return (
    <div className={styles.wrapper}>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Menu />}>
            <Route index element={<HomePage />} />
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<MovieDetailsCast />} />
              <Route path="reviews" element={<MovieDetailsReviews />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </div>
  );
}
export default App;
