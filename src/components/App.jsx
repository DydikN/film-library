import { Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import MovieDetails from 'components/MovieDetails/MovieDetails';
import MovieDetailsCast from './MovieDetailsCast/MovieDetailsCast';
import MovieDetailsReviews from './MovieDetailsReviews/MovieDetailsReviews';

import Menu from './Menu/Menu';

function App() {
  return (
    <div>
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
    </div>
  );
}
export default App;
