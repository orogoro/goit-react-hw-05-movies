import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import HomePage from './HomePage/HomePage';
import MoviesPage from './MoviesPage/MoviesPage';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route path="" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>
    </div>
  );
}
