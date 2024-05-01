/* eslint-disable @typescript-eslint/no-explicit-any */
import { cleanup, render } from '@testing-library/react';

import App from './app';

describe('Sidenav Component', () => {
    let component: any;

    beforeEach(() => {
        component = () => {
            return render(<App />);
        };
    });

    afterEach(() => {
        cleanup();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
