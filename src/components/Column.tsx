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
        <List>
            {column.tasks.length === 0 ? (
                <EmptyColumn>No tasks in this column</EmptyColumn>
            ) : (
                column.tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))
            )}
        </List>
    </Wrapper>
)

export default Column;
