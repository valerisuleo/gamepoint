// src/RoutingModule.js
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import { lazy } from 'react';

const GameRoutes = lazy(() => import('../views/games/routes'));
const router = createBrowserRouter([
    {
        path: '/',
        element: <Navigate to="/games" replace />,
    },
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '/games/*', element: <GameRoutes /> }],
    },
]);

export default router;