import { Fragment, Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../common/navbar/navbar';
import { useTheme } from '../common/context/theme/theme';
import SpinnerComponent from '../common/library/components/spinner/spinner';

const Layout = () => {
    const { isDarkMode } = useTheme();

    return (
        <Fragment>
            <Navbar />
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
