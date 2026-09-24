import { useState } from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import AddTaskDialog from '../components/AddTaskDialog';
import Column from '../components/Column';
import type { ColumnId } from '../libs/types';

const Page = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
`;

const Board = styled.main`
    display: flex;
    flex: 1;
    padding: 20px;
    gap: 16px;
    align-items: flex-start;
    overflow-x: auto;
    min-height: 0;
`;

interface DialogState {
    open: boolean;
    column: ColumnId;
};

export default function BoardPage() {
    const [dialogState, setDialogState] = useState<DialogState>({ open: false, column: 'todo' });

    const openDialog = (column: ColumnId = 'todo') => setDialogState({ open: true, column });
    const closeDialog = () => setDialogState((dialog) => ({ ...dialog, open: false }));

    return (
        <Page>
            <Header onAddTask={() => openDialog()} />
            <Board>
                <Column column ={{id: "todo", title: "To Do", tasks: []}} />
                <Column column={{id: "inProgress", title: "In Progress", tasks: []}} />
                <Column column={{id: "done", title: "Done", tasks: []}} />
            </Board>
            <AddTaskDialog
                open={dialogState.open}
                onClose={closeDialog}
                defaultColumn={dialogState.column}
            />
        </Page>
    );
}
