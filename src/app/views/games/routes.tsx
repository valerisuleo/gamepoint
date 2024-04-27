import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const IndexPage = lazy(() => import('./list/index'));

const routes = () => {
    return (
        <Routes>
            <Route path="/" element={<IndexPage />} />
        </Routes>
    );
};

export default routes;
