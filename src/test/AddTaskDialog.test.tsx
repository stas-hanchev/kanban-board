import { describe, expect, it, vi } from 'vitest';
import userEvent from '@testing-library/user-event';
import { screen } from '@testing-library/react';
import { renderWithProviders } from './test-utils';
import AddTaskDialog from '../components/AddTaskDialog';

describe('AddTaskDialog', () => {
    it('It doesn\'t render anything when open=false', () => {
        renderWithProviders(<AddTaskDialog open={false} onClose={vi.fn()} />);

        expect(screen.queryByText('Add New Task')).not.toBeInTheDocument();
    });

    it('It shows the form fields when open=true', () => {
        renderWithProviders(<AddTaskDialog open onClose={vi.fn()} />);

        expect(screen.getByText('Add New Task')).toBeInTheDocument();
        expect(screen.getByLabelText('Title')).toBeInTheDocument();
        expect(screen.getByLabelText('Description')).toBeInTheDocument();
    });

    it('It shows validation errors when trying to submit an empty form', async () => {
        const user = userEvent.setup();
        renderWithProviders(<AddTaskDialog open onClose={vi.fn()} />);

        await user.click(screen.getByRole('button', { name: /add task/i }));

        expect(await screen.findByText('Title is required')).toBeInTheDocument();
    });

    it('It dispatches addTaskRequest when submitting a valid form', async () => {
        const user = userEvent.setup();
        const { store } = renderWithProviders(<AddTaskDialog open onClose={vi.fn()} />);

        await user.type(screen.getByLabelText('Title'), 'New Task');
        await user.click(screen.getByRole('button', { name: /add task/i }));

        expect(store.getState().tasks.isSaving).toBe(true);
    });

    it('It matches the snapshot', () => {
        const { asFragment } = renderWithProviders(<AddTaskDialog open onClose={vi.fn()} />);

        expect(asFragment()).toMatchSnapshot();
    });
});
