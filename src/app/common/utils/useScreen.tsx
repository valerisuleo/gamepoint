import { useState, useEffect } from 'react';

// Define a type for the screen type return value
type ScreenType = 'mobile' | 'tablet' | 'desktop';

const useScreenDetect = (): ScreenType => {
    const mobileBreakpoint = 768;
    const tabletBreakpoint = 1024;

    // Initialize state with a function to determine the initial screen type based on window width
    const [screenType, setScreenType] = useState<ScreenType>(() => {
        const width = window.innerWidth;
        if (width <= mobileBreakpoint) return 'mobile';
        if (width <= tabletBreakpoint) return 'tablet';
        return 'desktop';
    });

    useEffect(() => {
        const handleResize = () => {
            const width = window.innerWidth;
            if (width <= mobileBreakpoint) {
                setScreenType('mobile');
            } else if (width <= tabletBreakpoint) {
                setScreenType('tablet');
            } else {
                setScreenType('desktop');
            }
        };

        window.addEventListener('resize', handleResize);

        // Clean up event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [mobileBreakpoint, tabletBreakpoint]);

    return screenType; // The hook returns the current screen type
};

export default useScreenDetect;
