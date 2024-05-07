/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable-next-line */
import { useEffect, useState } from 'react';
import Button from '../library/components/button/button';
import { IBtn } from '../library/components/button/interfaces';
import { useTheme } from '../context/theme/theme';
import { Link, useNavigate } from 'react-router-dom';
import { useDataContext } from '../context/data/context';
import 'animate.css';

export function Navbar() {
    const { isDarkMode, handleDarkMode } = useTheme();
    const { outputEvent } = useDataContext();
    const navigate = useNavigate();
    const [isOpen, setOpen] = useState(false);
    const [value, setValue] = useState('');
    const [btnProps, setProps] = useState<IBtn>({
        label: 'Dark Mode',
        type: 'button',
        isDarkMode: false,
        onEmitEvent: handleDarkMode,
        classes: {
            contextual: 'dark',
            size: 'md',
        },
    });
    const navbarTheme = isDarkMode ? 'dark' : 'light';
    const classes = `navbar navbar-expand-lg navbar-${navbarTheme} bg-${navbarTheme}`;

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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const current = e.target;
        setValue(current.value);
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        outputEvent({
            name: 'search',
            data: value,
        });

        setValue('');
        navigate('/games');
    };

    const toggleMenu = () => {
        setOpen((prevState) => !prevState);
    };

    return (
        <nav style={{ borderBottom: '1px solid white' }} className={classes}>
            <div className="container-fluid">
                <Link className={`navbar-brand`} to="/">
                    <img
                        src={`../../../assets/${navbarTheme}.png`}
                        alt=""
                        width="50"
                        height="auto"
                    />
                    <span className='ps-3'>Game Point</span>
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
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0"></ul>
                    <form className="d-flex" onSubmit={handleSubmit}>
                        <div className="mx-2">
                            <input
                                className="form-control"
                                type="text"
                                placeholder="Search"
                                aria-label="Search"
                                onChange={handleChange}
                                value={value}
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
