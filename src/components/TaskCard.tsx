import styled from 'styled-components'
import Typography from '@mui/material/Typography'

import type { Task } from '../libs/types'

const Card = styled.div`
    background-color: #ffffff;
    border-radius: 8px;
    padding: 12px 14px;
    margin-bottom: 10px;
    border: 1px solid #d8dfdc;
    box-shadow: 0px 1px 0px rgba(23, 51, 47, 0.08);
    cursor: grab;

    &:hover,
    &:focus {
        border-color: #1f6f6b;
    }
`

interface TaskCardProps {
    task: Task
}

export default function TaskCard({ task }: TaskCardProps) {
    return (
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
}
