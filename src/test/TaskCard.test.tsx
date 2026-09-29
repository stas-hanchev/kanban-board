import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithDnd } from './test-utils';
import TaskCard from '../components/TaskCard';
import type { Task } from '../libs/types';

const task: Task = { id: 't1', title: 'Set up routing', description: 'react-router: 404 page' };

describe('TaskCard', () => {
    it('It shows the task title and description', () => {
        renderWithDnd(<TaskCard task={task} index={0} />);

        expect(screen.getByText('Set up routing')).toBeInTheDocument();
        expect(screen.getByText('react-router: 404 page')).toBeInTheDocument();
    });

    it("It doesn't render a description block when there isn't one", () => {
        const taskWithoutDescription: Task = { id: 't2', title: 'Task without a description' };
        renderWithDnd(<TaskCard task={taskWithoutDescription} index={0} />);

        expect(screen.getByText('Task without a description')).toBeInTheDocument();
        expect(screen.queryByText(/react-router/i)).not.toBeInTheDocument();
    });

    it('It matches the snapshot', () => {
        const { asFragment } = renderWithDnd(<TaskCard task={task} index={0} />);

        expect(asFragment()).toMatchSnapshot();
    });
});
