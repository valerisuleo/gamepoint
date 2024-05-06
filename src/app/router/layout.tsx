import { Fragment } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../common/navbar/navbar';
import { useTheme } from '../common/context/theme/theme';

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
                <Outlet />
            </main>
        </Fragment>
    );
};

export default Layout;
