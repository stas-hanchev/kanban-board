import { useState } from 'react';
import { AddTaskDialog, Column, Header } from '../components/index.ts';
import Page from '../styled/Page';
import Board from '../styled/Board';
import type { ColumnId } from '../libs/types';
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
