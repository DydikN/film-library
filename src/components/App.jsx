import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const MoviesPage = lazy(() => import('pages/MoviesPage/MoviesPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));
const MovieDetails = lazy(() => import('components/MovieDetails/MovieDetails'));
const MovieDetailsCast = lazy(() =>
  import('./MovieDetailsCast/MovieDetailsCast')
);
const MovieDetailsReviews = lazy(() =>
  import('./MovieDetailsReviews/MovieDetailsReviews')
);

const Menu = lazy(() => import('./Menu/Menu'));

function App() {
  return (
    <div>
      <Suspense fallback={<p>...loading</p>}>
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
