// src/RoutingModule.js
import { createBrowserRouter } from 'react-router-dom';
import Layout from './layout';
import { lazy } from 'react';

const GameRouter = lazy(() => import('../views/games/routes'));
const router = createBrowserRouter([
    {
        path: '/games',

        element: <Layout />,
        children: [{ path: '', element: <GameRouter /> }],
    },
]);

export default router;