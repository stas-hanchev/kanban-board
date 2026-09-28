import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { renderWithProviders } from '../test/test-utils';
import Header from './Header';

describe('Header', () => {
    it('It shows the board name', () => {
        renderWithProviders(<Header onAddTask={vi.fn()} />);

        expect(screen.getByText('Kanban Board')).toBeInTheDocument();
    });

    it('It calls onAddTask when the add task button is clicked', async () => {
        const user = userEvent.setup();
        const onAddTask = vi.fn();
        renderWithProviders(<Header onAddTask={onAddTask} />);

        await user.click(screen.getByRole('button', { name: /add task/i }));

        expect(onAddTask).toHaveBeenCalledTimes(1);
    });

    it('It matches the snapshot', () => {
        const { asFragment } = renderWithProviders(<Header onAddTask={vi.fn()} />);

        expect(asFragment()).toMatchSnapshot();
    });
});
