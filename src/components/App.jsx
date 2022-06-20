import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
// import { Toaster } from 'react-hot-toast';

import Navigation from './Navigation/Navigation';
import HomePage from './HomePage/HomePage';
import MoviesPage from './MoviesPage/MoviesPage';
import ItemPage from './ItemPage/ItemPage';

export default function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movies" element={<MoviesPage />} />
        <Route path="movies/:itemId" element={<ItemPage />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      {/* <Toaster /> */}
    </>
  );
}
