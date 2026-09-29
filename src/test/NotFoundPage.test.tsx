import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithRouter } from './test-utils';
import NotFoundPage from '../pages/NotFoundPage';

describe('NotFoundPage', () => {
    it('It shows 404 and a link back to the board', () => {
        renderWithRouter(<NotFoundPage />, { route: '/non-existent-page' });

        expect(screen.getByText('404')).toBeInTheDocument();
        const link = screen.getByRole('link', { name: /to the board/i });
        expect(link).toHaveAttribute('href', '/');
    });

    it('It matches the snapshot', () => {
        const { asFragment } = renderWithRouter(<NotFoundPage />);

        expect(asFragment()).toMatchSnapshot();
    });
});
