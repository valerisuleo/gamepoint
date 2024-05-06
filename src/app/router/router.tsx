// src/RoutingModule.js
import { createBrowserRouter } from 'react-router-dom';
import GameIndex from '../views/games/list';
import Layout from './layout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        children: [{ path: '', element: <GameIndex /> }],
    },
]);

export default router;

// Lazy loading the Game component
// const GameRouter = lazy(() => import('../views/games/routes'));
// const RoutingModule = () => {
//     const { isDarkMode } = useTheme();
//     return (
//         <Fragment>
//             <Navbar></Navbar>
//             <main
//                 className={`container-fluid ${
//                     isDarkMode && 'bg-dark text-white'
//                 }`}
//             >
//                 <Suspense fallback={<div>Loading...</div>}>
//                     <Routes>
//                         <Route
//                             path="/"
//                             element={<Navigate replace to="/games" />}
//                         />
//                         <Route path="/games/*" element={<GameRouter />} />
//                     </Routes>
//                 </Suspense>
//             </main>
//         </Fragment>
//     );
// };

// export default RoutingModule;
