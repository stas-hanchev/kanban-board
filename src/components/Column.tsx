import styled from 'styled-components';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import TaskCard from './TaskCard';
import { statusColors } from '../libs/theme';
import type { ColumnData } from '../libs/types';

const Wrapper = styled.div<{ $color: string }>`
    flex: 0 0 300px;
    background: #dfe6e3;
    border-radius: 10px;
    border-top: 4px solid ${({ $color }) => $color};
    padding: 12px;
    display: flex;
    flex-direction: column;
    max-height: 100%;
`;

const Head = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2px 4px 12px;
    width: 400px;
`;

const List = styled.div`
    flex: 1;
    overflow-y: auto;
    min-height: 40px;
`;

const Empty = styled.div`
    border: 2px dashed #cfd8d4;
    border-radius: 8px;
    padding: 16px;
    text-align: center;
    color: #7b8794;
    font-size: 14px;
`;

interface ColumnProps {
    column: ColumnData;
}

export default function Column({ column }: ColumnProps) {
    return (
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
    );
}