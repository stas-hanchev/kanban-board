import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import TaskCard from './TaskCard'
import { statusColors } from '../libs/theme'

import Empty from '../styled/EmptyColumn';
import Head from '../styled/ColumnHead';
import List from '../styled/TaskList';
import Wrapper from '../styled/Wrapper';

import type { ColumnData } from '../libs/types'

interface ColumnProps {
    column: ColumnData
}

const Column = ({ column }: ColumnProps) => (
    <Wrapper $color={statusColors[column.id]}>
        <Head>
            <Typography variant="h2">{column.title}</Typography>
            <Chip label={column.tasks.length} size="small" />
        </Head>
        <List>
            {column.tasks.length === 0 ? (
                <Empty>No tasks in this column</Empty>
            ) : (
                column.tasks.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))
            )}
        </List>
    </Wrapper>
)

export default Column;
