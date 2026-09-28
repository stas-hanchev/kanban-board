import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithProviders } from './test/test-utils';
import App from './App';

describe('App', () => {
    it('It renders the board on the "/" route', () => {
        renderWithProviders(<App />);

        expect(screen.getByText('Kanban Board')).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'To Do' })).toBeInTheDocument();
    });

    it('It matches the snapshot', () => {
        const { asFragment } = renderWithProviders(<App />);

        expect(asFragment()).toMatchSnapshot();
    });
});
