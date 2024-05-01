// src/RoutingModule.js
import React, { Fragment, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from '../common/navbar/navbar';

// Lazy loading the Game component
const GameRouter = lazy(() => import('../views/games/routes'));

const RoutingModule = () => {
    return (
        <Fragment>
            <Navbar></Navbar>
            <main className="container-fluid">
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
