// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Router, RouterProvider } from 'react-router-dom';

import router from './router/router';

export function App() {
    return <RouterProvider router={router}></RouterProvider>;
}

export default App;
