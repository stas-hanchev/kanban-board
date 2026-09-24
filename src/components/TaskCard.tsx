import Typography from '@mui/material/Typography'

import type { Task } from '../libs/types'

import Card from '../styled/TaskCard';

interface TaskCardProps {
    task: Task
}

const TaskCard = ({ task }: TaskCardProps) => (
    <Card>
        <Typography variant="subtitle2" gutterBottom>
            {task.title}
        </Typography>
        {task.description && (
            <Typography variant="body2" color="textSecondary">
                {task.description}
            </Typography>
        )}
    </Card>
)

export default TaskCard;