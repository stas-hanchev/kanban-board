import { describe, expect, it } from 'vitest';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../test/test-utils';
import BoardPage from './BoardPage';

describe('BoardPage', () => {
    it('It renders all three columns', () => {
        renderWithProviders(<BoardPage />);

        expect(screen.getByRole('heading', { name: 'To Do' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'In Progress' })).toBeInTheDocument();
        expect(screen.getByRole('heading', { name: 'Done' })).toBeInTheDocument();
    });

    it('It opens the add task dialog when the "Add Task" button in the header is clicked', async () => {
        const user = userEvent.setup();
        renderWithProviders(<BoardPage />);

        expect(screen.queryByText('Add New Task')).not.toBeInTheDocument();

        await user.click(screen.getByRole('button', { name: /add task/i }));

        expect(screen.getByText('Add New Task')).toBeInTheDocument();
    });

    it('It matches the snapshot', () => {
        const { asFragment } = renderWithProviders(<BoardPage />);

        expect(asFragment()).toMatchSnapshot();
    });
});
