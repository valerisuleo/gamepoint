import { render } from '@testing-library/react';
import ListGroupComponent from './list-group'; // Make sure to import the correct component

describe('ListGroup', () => {
    it('should render successfully', () => {
        // Example collection data, adjust as necessary
        const mockCollection = [
            { id: 1, name: 'Item 1', isDisabled: false },
            { id: 2, name: 'Item 2', isDisabled: true },
        ];

        // Render component with all required props
        const { baseElement } = render(
            <ListGroupComponent
                collection={mockCollection}
                itemKey="id"
                text="name"
                onEmitEvent={() => {}}
                isHorizontal={false}
                isFlush={false}
                isDarkMode={false}
                reset={false}
            />
        );

        expect(baseElement).toBeTruthy();
    });
});
