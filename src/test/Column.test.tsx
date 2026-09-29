import { describe, expect, it } from 'vitest';
import { screen } from '@testing-library/react';
import { renderWithDragContext } from './test-utils';
import Column from '../components/Column';
import type { ColumnData } from '../libs/types';

const columnWithTasks: ColumnData = {
    id: 'todo',
    title: 'To Do',
    tasks: [
        { id: 't1', title: 'First Task' },
        { id: 't2', title: 'Second Task' },
    ],
};

const emptyColumn: ColumnData = { id: 'done', title: 'Done', tasks: [] };

describe('Column', () => {
    it('It shows the header and task counter', () => {
        renderWithDragContext(<Column column={columnWithTasks} />);

        expect(screen.getByRole('heading', { name: 'To Do' })).toBeInTheDocument();
        expect(screen.getByText('2')).toBeInTheDocument();
    });

    it('It renders a card for each task', () => {
        renderWithDragContext(<Column column={columnWithTasks} />);

        expect(screen.getByText('First Task')).toBeInTheDocument();
        expect(screen.getByText('Second Task')).toBeInTheDocument();
    });

    it('It shows a placeholder when there are no tasks', () => {
        renderWithDragContext(<Column column={emptyColumn} />);

        expect(screen.getByText('No tasks in this column')).toBeInTheDocument();
    });

    it('It matches the snapshot', () => {
        const { asFragment } = renderWithDragContext(<Column column={columnWithTasks} />);

        expect(asFragment()).toMatchSnapshot();
    });
});
