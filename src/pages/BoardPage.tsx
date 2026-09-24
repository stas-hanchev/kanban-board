import { useState } from 'react';

import Header from '../components/Header';
import AddTaskDialog from '../components/AddTaskDialog';
import Column from '../components/Column';

import type { ColumnId } from '../libs/types';

import Page from '../styled/Page';
import Board from '../styled/Board';

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
