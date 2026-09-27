import { Droppable } from '@hello-pangea/dnd';
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import TaskCard from './TaskCard'
import { EmptyColumn, ColumnHead, List, Wrapper } from '../styled/index';
import type { ColumnData } from '../libs/types'
import { statusColors } from '../libs/theme';

interface ColumnProps {
    column: ColumnData
}

const Column = ({ column }: ColumnProps) => (
    <Wrapper $color={statusColors[column.id]}>
        <ColumnHead>
            <Typography variant="subtitle1" component="h2" sx={{ fontWeight: 700 }}>
                {column.title}
            </Typography>
            <Chip label={column.tasks.length} size="small" />
        </ColumnHead>
        <Droppable droppableId={column.id}>
            {(provided, snapshot) => (
                <List
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    $isDraggingOver={snapshot.isDraggingOver}
                >
                    {column.tasks.length === 0 && !snapshot.isDraggingOver ? (
                        <EmptyColumn>No tasks in this column</EmptyColumn>
                    ) : (
                        column.tasks.map((task, index) => (
                            <TaskCard key={task.id} task={task} index={index} />
                        ))
                    )}
                    {provided.placeholder}
                </List>
            )}
        </Droppable>
    </Wrapper>
)

export default Column;
