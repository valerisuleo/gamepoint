import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SpinnerComponent, { ISpinner } from './spinner';

describe('Spinner component', () => {
    it('renders the spinner correctly', () => {
        const spinnerProps: ISpinner = {
            color: 'primary',
        };

        render(<SpinnerComponent {...spinnerProps} />);

        const spinnerContainer = screen.getByTestId('spinner-container');
        expect(spinnerContainer).toBeInTheDocument();
        expect(spinnerContainer).toHaveClass('spinnerContainer');
        expect(spinnerContainer).toHaveClass(`text-${spinnerProps.color}`);

        const spinnerBorder = screen.getByRole('status');
        expect(spinnerBorder).toBeInTheDocument();
        expect(spinnerBorder).toHaveClass('spinner-border');
    });
});
