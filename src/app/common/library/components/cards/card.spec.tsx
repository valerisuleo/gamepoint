import { render, screen } from '@testing-library/react';
import CardComponent from './card';
import '@testing-library/jest-dom';

describe('CardComponent', () => {
    const header = { children: 'Header Content' };
    const body = { children: 'Body Content', cardTitle: 'CardComponent Title' };

    it('should render the header and body correctly', () => {
        render(
            <CardComponent
                header={header}
                body={body}
                isDarkMode={false}
                className={''}
            />
        );
        expect(screen.getByText(header.children)).toBeInTheDocument();
        expect(screen.getByText(body.cardTitle)).toBeInTheDocument();
        expect(screen.getByText(body.children)).toBeInTheDocument();
    });

    it('should render only the header correctly when there is no body', () => {
        render(
            <CardComponent
                header={header}
                body={{
                    cardTitle: '',
                    children: '',
                }}
                isDarkMode={false}
                className={''}
            />
        );
        expect(screen.getByText(header.children)).toBeInTheDocument();
        expect(screen.queryByText(body.cardTitle)).toBeNull();
        expect(screen.queryByText(body.children)).toBeNull();
    });

    it('should render only the body correctly when there is no header', () => {
        render(
            <CardComponent
                body={body}
                header={{
                    children: '',
                }}
                isDarkMode={false}
                className={''}
            />
        );
        expect(screen.getByText(body.cardTitle)).toBeInTheDocument();
        expect(screen.getByText(body.children)).toBeInTheDocument();
        expect(screen.queryByText(header.children)).toBeNull();
    });
});
