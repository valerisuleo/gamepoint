/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable-next-line */

import { useEffect, useState } from 'react';
import Button from '../../library/components/button/button';
import { IBtn } from '../../library/components/button/interfaces';
import { useTheme } from '../../context/theme/theme';
import { Link } from 'react-router-dom';

export function Navbar() {
    const [isOpen, setOpen] = useState(false);
    const { isDarkMode, handleDarkMode } = useTheme();
    const [btnProps, setProps] = useState<IBtn>({
        label: 'Dark Mode',
        type: 'button',
        isDarkMode,
        onEmitEvent: handleDarkMode,
        classes: {
            contextual: 'dark',
            size: 'md',
        },
    });

    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };

    useEffect(() => {
        setProps((prevState) => ({
            ...prevState,
            label: isDarkMode ? 'Light Mode' : 'Dark Mode',
            classes: {
                ...prevState.classes,
                contextual: isDarkMode ? 'light' : 'dark',
            },
        }));
    }, [isDarkMode]);

    return (
        <nav
            className={`navbar navbar-expand-lg navbar-light bg-${
                isDarkMode ? 'dark' : 'light'
            }`}
        >
            <div className="container-fluid">
                <Link
                    className={`navbar-brand ${isDarkMode && 'text-white'}`}
                    to="/"
                >
                    Game Point
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    onClick={toggleMenu}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`collapse navbar-collapse ${isOpen && 'show'}`}
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link
                                className={`navbar-brand ${
                                    isDarkMode && 'text-white'
                                }`}
                                to="/"
                            >
                                Home
                            </Link>
                        </li>
                        {/* <li className="nav-item">
                            <a className="nav-link" href="#">
                                Link
                            </a>
                        </li>
                        <li className="nav-item dropdown">
                            <a
                                className="nav-link dropdown-toggle"
                                href="#"
                                id="navbarDropdown"
                                role="button"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                Dropdown
                            </a>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="navbarDropdown"
                            >
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Action
                                    </a>
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Another action
                                    </a>
                                </li>
                                <li>
                                    <hr className="dropdown-divider" />
                                </li>
                                <li>
                                    <a className="dropdown-item" href="#">
                                        Something else here
                                    </a>
                                </li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link disabled">Disabled</a>
                        </li> */}
                    </ul>
                    <form className="d-flex">
                        <div className='mx-2'>
                            <input
                                className="form-control"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </div>
                        <div className="d-flex align-items-center">
                            <Button {...btnProps}></Button>
                        </div>
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
