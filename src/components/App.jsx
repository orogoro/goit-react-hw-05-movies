import React from 'react';
import { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Navigation from './Navigation/Navigation';
import { LoaderSpiner } from './Loader/Loader';

const HomePage = lazy(() => import('./HomePage/HomePage'));
const MoviesPage = lazy(() => import('./MoviesPage/MoviesPage'));
const ItemPage = lazy(() => import('./ItemPage/ItemPage'));
const Cast = lazy(() => import('./ItemPage/Cast/Cast'));
const Reviews = lazy(() => import('./ItemPage/Reviews/Reviews'));

export default function App() {
  return (
    <>
      <Navigation />

      <Suspense fallback={<LoaderSpiner />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviesPage />} />
          <Route path="movies/:itemId" element={<ItemPage />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
}
