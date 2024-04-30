// src/RoutingModule.js
import React, { Fragment, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../common/components/navbar/navbar';
import { useTheme } from '../common/context/theme/theme';

// Lazy loading the Game component
const GameRouter = lazy(() => import('../views/games/routes'));
const RoutingModule = () => {
    const { isDarkMode } = useTheme();
    return (
        <Fragment>
            <Navbar></Navbar>
            <main
                className={`container-fluid ${
                    isDarkMode && 'bg-dark text-white'
                }`}
            >
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route
                            path="/"
                            element={<Navigate replace to="/games" />}
                        />
                        <Route path="/games/*" element={<GameRouter />} />
                    </Routes>
                </Suspense>
            </main>
        </Fragment>
    );
};

export default RoutingModule;
