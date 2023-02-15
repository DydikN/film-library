import { Route, Routes } from 'react-router-dom';

import HomePage from 'pages/HomePage/HomePage';
import MoviesPage from 'pages/MoviesPage/MoviesPage';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';
import MovieDetails from 'components/Movies/MovieDetails/MovieDetails';
import MovieDetailsCast from './Movies/MovieDetails/MovieDetailsInfo/MovieDetailsCast/MovieDetailsCast';
import MovieDetailsReviews from './Movies/MovieDetails/MovieDetailsInfo/MovieDetailsReviews/MovieDetailsReviews';

import Menu from './Menu/Menu';

function App() {
  return (
    <div>
      <Menu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<MovieDetailsCast />} />
          <Route path="reviews" element={<MovieDetailsReviews />} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
}
export default App;
