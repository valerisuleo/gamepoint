// src/RoutingModule.js
import React, { lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

// Lazy loading the Game component
const GameRouter = lazy(() => import('../views/games/routes'));

const RoutingModule = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Routes>
                <Route path="/" element={<Navigate replace to="/games" />} />
                <Route path="/games/*" element={<GameRouter />} />
            </Routes>
        </Suspense>
    );
};

export default RoutingModule;
