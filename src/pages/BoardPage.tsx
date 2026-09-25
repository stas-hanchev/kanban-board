import { useState } from 'react';
import { AddTaskDialog, Column, Header } from '../components/index.ts';
import Page from '../styled/Page';
import Board from '../styled/Board';

import { useAppSelector } from '../store/hooks';
import {  selectColumns } from '../store/ducks/tasks';

const BoardPage = () => {
    const columns = useAppSelector(selectColumns);
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    return (
        <Page>
            <Header onAddTask={() => setIsDialogOpen(true)} />
            <Board>
                {columns.map((column) => (
                    <Column key={column.id} column={column} />
                ))}
            </Board>
            <AddTaskDialog
                open={isDialogOpen}
                onClose={() => setIsDialogOpen(false)}
                defaultColumn="todo"
            />
        </Page>
    );
}

export default BoardPage;
