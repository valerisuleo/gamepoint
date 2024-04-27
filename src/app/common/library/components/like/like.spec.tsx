import { render, fireEvent, screen } from '@testing-library/react';
import Like from './like';
import '@testing-library/jest-dom';

describe('Like', () => {
    it('should render successfully', () => {
        const { baseElement } = render(<Like onEmitEvent={() => {}} />);
        expect(baseElement).toBeTruthy();
    });

    it('should start with the default (unliked) state', () => {
        render(<Like onEmitEvent={() => {}} />);
        const unlikedIcon = screen.queryByTestId('unliked-icon'); // Make sure to add data-testid='unliked-icon' to your FaRegHeart component
        expect(unlikedIcon).toBeInTheDocument();
    });

    it('should toggle like state on click', () => {
        render(<Like onEmitEvent={() => {}} />);

        // Initially, the unliked icon should be present
        const unlikedIcon = screen.getByTestId('unliked-icon');
        expect(unlikedIcon).toBeInTheDocument();

        // Simulate a click
        fireEvent.click(unlikedIcon);

        // After the click, the liked icon should be present
        const likedIcon = screen.queryByTestId('liked-icon');
        expect(likedIcon).toBeInTheDocument();
    });

    it('should call onEmitEvent with correct argument', () => {
        const mockOnEmitEvent = jest.fn();
        render(<Like onEmitEvent={mockOnEmitEvent} />);

        // Simulate a click
        const icon = screen.getByTestId('unliked-icon');
        fireEvent.click(icon);

        // Check if the mock function was called with the correct argument
        expect(mockOnEmitEvent).toHaveBeenCalledWith(true);
    });
});
