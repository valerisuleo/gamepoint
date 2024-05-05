// src/RoutingModule.js
import React, { Fragment, lazy, Suspense } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useTheme } from '../common/context/theme/theme';
import Navbar from '../common/navbar/navbar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Lazy loading the Game component
const GameRouter = lazy(() => import('../views/games/routes'));
const RoutingModule = () => {
    const { isDarkMode } = useTheme();
    return (
        <Fragment>
            <Navbar></Navbar>
            <div style={{ width: '50px' }}>
                <ToastContainer
                    position="top-right"
                    autoClose={5000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                />
            </div>
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
