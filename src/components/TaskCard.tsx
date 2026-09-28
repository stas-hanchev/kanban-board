import { Draggable } from '@hello-pangea/dnd';
import Typography from '@mui/material/Typography';
import { Card } from '../styled/index';
import type { Task } from '../libs/types'

interface TaskCardProps {
    task: Task
    index: number
}

const TaskCard = ({ task, index }: TaskCardProps) => (
    <Draggable draggableId={task.id} index={index}>
        {(provided, snapshot) => (
            <Card
                ref={provided.innerRef}
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                $isDragging={snapshot.isDragging}
            >
                <Typography variant="subtitle2" gutterBottom>
                    {task.title}
                </Typography>
                {task.description && (
                    <Typography variant="body2" color="textSecondary">
                        {task.description}
                    </Typography>
                )}
            </Card>
        )}
    </Draggable>
)

export default TaskCard;
