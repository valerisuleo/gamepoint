import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const GamesIndex = lazy(() => import('./list/index'));
const GameShow = lazy(() => import('./details/show'));

const routes = () => {
    return (
        <Routes>
            <Route path="" element={<GamesIndex />} />
            <Route path=":id" element={<GameShow />} />
        </Routes>
    );
};

export default routes;
