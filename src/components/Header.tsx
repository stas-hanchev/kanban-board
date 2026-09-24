import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'

import { Brand } from '../styled/index';

interface HeaderProps {
    onAddTask: () => void
}

const Header = ({ onAddTask }: HeaderProps) => (
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

export default Header;
