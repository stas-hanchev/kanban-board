import styled from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';

const Brand = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    flex-grow: 1;
`;

interface HeaderProps {
    onAddTask: () => void;
}

export default function Header({ onAddTask }: HeaderProps) {
    return (
        <AppBar position="static" color="primary">
            <Toolbar>
                <Brand>
                   <Typography variant="h6" component="div">
                        Kanban Board
                    </Typography>
                </Brand>
                <Button color="inherit" onClick={onAddTask}>
                    <AddIcon />
                    Add Task
                </Button>
            </Toolbar>
        </AppBar>
    )
}
