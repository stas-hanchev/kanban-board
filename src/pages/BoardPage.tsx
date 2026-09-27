import { useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import type { DropResult } from '@hello-pangea/dnd';
import { AddTaskDialog, Column, Header } from '../components/index.ts';
import Page from '../styled/Page';
import Board from '../styled/Board';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { moveTask, selectColumns } from '../store/ducks/tasks';
import type { ColumnId } from '../libs/types';

const BoardPage = () => {
    const dispatch = useAppDispatch();
    const columns = useAppSelector(selectColumns);
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    const handleDragEnd = (result: DropResult) => {
        dispatch(
            moveTask(
                { droppableId: result.source.droppableId as ColumnId, index: result.source.index },
                result.destination
                    ? { droppableId: result.destination.droppableId as ColumnId, index: result.destination.index }
                    : null,
            ),
        );
    };

    return (
        <Page>
            <Header onAddTask={() => setIsDialogOpen(true)} />
            <DragDropContext onDragEnd={handleDragEnd}>
                <Board>
                    {columns.map((column) => (
                        <Column key={column.id} column={column} />
                    ))}
                </Board>
            </DragDropContext>
            <AddTaskDialog
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                defaultColumn="todo"
            />
        </Page>
    );
}

export default BoardPage;
