import { useState } from 'react';
import { AddTaskDialog, Column, Header } from '../components/index.ts';
import Page from '../styled/Page';
import Board from '../styled/Board';

const BoardPage = () => {
    const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);

    return (
        <Page>
            <Header onAddTask={() => setIsDialogOpen(true)} />
            <Board>
                <Column column ={{id: "todo", title: "To Do", tasks: []}} />
                <Column column={{id: "inProgress", title: "In Progress", tasks: []}} />
                <Column column={{id: "done", title: "Done", tasks: []}} />
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
