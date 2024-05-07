// src/RoutingModule.js
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import { lazy } from 'react';
import ErrorPage from '../views/errors/errors';

const GameRoutes = lazy(() => import('../views/games/routes'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/games" replace />,
        errorElement: <ErrorPage />,
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/games/*', element: <GameRoutes /> }],
    },
]);

export default router;
