import { createContext, useContext, useState } from 'react';
import { IContext } from '../../interfaces';

interface IThemeContext {
    isDarkMode: boolean;
    handleDarkMode: () => void;
}

const Context = createContext<IThemeContext | undefined>(undefined);
export const useTheme = () => {
    const context = useContext(Context);
    if (context === undefined) {
        throw new Error('useTheme must be used within a ThemeProvider');
    }
    return context;
};

const ThemeProvider = ({ children }: IContext) => {
    const [isDarkMode, setDarkMode] = useState<boolean>(false);

    const handleDarkMode = () => {
        setDarkMode((prevState) => !prevState);
    };
    return (
        <Context.Provider value={{ handleDarkMode, isDarkMode }}>
            {children}
        </Context.Provider>
    );
};

export default ThemeProvider;
