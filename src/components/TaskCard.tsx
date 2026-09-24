import Typography from '@mui/material/Typography';
import { Card } from '../styled/index';
import type { Task } from '../libs/types'

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