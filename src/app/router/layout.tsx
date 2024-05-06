import { Fragment, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../common/navbar/navbar';
import { useTheme } from '../common/context/theme/theme';
import SpinnerComponent from '../common/library/components/spinner/spinner';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Layout = () => {
    const { isDarkMode } = useTheme();

    return (
        <Fragment>
            <Navbar />
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
                <Suspense fallback={<SpinnerComponent color="primary" />}>
                    <Outlet />
                </Suspense>
            </main>
        </Fragment>
    );
};

export default Layout;
