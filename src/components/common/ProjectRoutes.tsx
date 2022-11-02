import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Items } from '../Items';
import { Detailed } from '../Detailed';
import { ErrorPage } from './ErrorPage';

export const ProjectRoutes = () => {
  return (
    <Routes>
      <Route path={'/'} element={<Items />} />
      <Route path={'/detailed/:itemId'} element={<Detailed />} />
      <Route path={'/404'} element={<ErrorPage />} />
      <Route path={'*'} element={<Navigate to={'/404'} />} />
    </Routes>
  );
};
