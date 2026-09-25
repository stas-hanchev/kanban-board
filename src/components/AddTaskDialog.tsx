import { useState } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

import type { ColumnId } from '../libs/types'

const columnOptions: { value: ColumnId; label: string }[] = [
    { value: 'todo', label: 'To Do' },
    { value: 'inProgress', label: 'In Progress' },
    { value: 'done', label: 'Done' },
]

interface AddTaskDialogProps {
    open: boolean
    defaultColumn?: ColumnId
    onClose: () => void
}

const AddTaskDialog = ({
    open,
    defaultColumn = 'todo',
    onClose,
}: AddTaskDialogProps) => {
    const [column, setColumn] = useState<ColumnId>(defaultColumn)
    const muiTheme = useTheme()
    const fullScreen = useMediaQuery(muiTheme.breakpoints.down('sm'))

    return (
        <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth fullScreen={fullScreen}>
            <DialogTitle>Add New Task</DialogTitle>
            <DialogContent>
                <TextField
                    style={{ marginTop: '16px' }}
                    label="Title"
                    fullWidth
                />
                <TextField
                    label="Description"
                    style={{ marginTop: '16px' }}
                    fullWidth
                    multiline
                    minRows={4}
                    slotProps={{
                        htmlInput: {
                            'data-gramm': 'false',
                            'data-enable-gramm': 'false',
                        },
                    }}
                />
                <TextField
                    select
                    label="Column"
                    fullWidth
                    value={column}
                    style={{ marginTop: '16px' }}
                    onChange={(e) => setColumn(e.target.value as ColumnId)}
                >
                    {columnOptions.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                            {option.label}
                        </MenuItem>
                    ))}
                </TextField>
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button onClick={onClose} variant="contained">
                    Add Task
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default AddTaskDialog
