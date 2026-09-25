import { useEffect, useRef } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import TextField from '@mui/material/TextField'
import MenuItem from '@mui/material/MenuItem'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'

import { useAppDispatch, useAppSelector } from '../store/hooks'
import { addTaskRequest, selectError, selectIsSaving } from '../store/ducks/tasks'
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

interface FormValues {
    title: string
    description: string
    column: ColumnId
}

const validationSchema = Yup.object({
    title: Yup.string()
        .trim()
        .min(3, 'At least 3 characters')
        .max(80, 'Maximum of 80 characters')
        .required('Title is required'),
    description: Yup.string().max(300, 'Maximum of 300 characters'),
    column: Yup.mixed<ColumnId>().oneOf(['todo', 'inProgress', 'done']).required(),
})

const AddTaskDialog = ({ open, defaultColumn = 'todo', onClose }: AddTaskDialogProps) => {
    const muiTheme = useTheme()
    const fullScreen = useMediaQuery(muiTheme.breakpoints.down('sm'))

    const dispatch = useAppDispatch()
    const isSaving = useAppSelector(selectIsSaving)
    const error = useAppSelector(selectError)
    const wasSaving = useRef(false)

    const formik = useFormik<FormValues>({
        initialValues: { title: '', description: '', column: defaultColumn },
        enableReinitialize: true,
        validationSchema,
        onSubmit: (values) => {
            dispatch(addTaskRequest(values.column, values.title, values.description))
        },
    })

    useEffect(() => {
        if (wasSaving.current && !isSaving && !error) {
            formik.resetForm()
            onClose()
        }
        wasSaving.current = isSaving
    }, [isSaving, error])

    const handleClose = () => {
        if (isSaving) return
        formik.resetForm()
        onClose()
    }

    return (
        <Dialog open={open} onClose={handleClose} maxWidth="sm" fullWidth fullScreen={fullScreen}>
            <form onSubmit={formik.handleSubmit} noValidate>
                <DialogTitle>Add New Task</DialogTitle>
                <DialogContent>
                    {error && (
                        <Alert severity="error" sx={{ mb: 2 }}>
                            {error}
                        </Alert>
                    )}
                    <TextField
                        style={{ marginTop: '16px' }}
                        label="Title"
                        name="title"
                        fullWidth
                        value={formik.values.title}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.title && Boolean(formik.errors.title)}
                        helperText={formik.touched.title && formik.errors.title}
                        disabled={isSaving}
                    />
                    <TextField
                        label="Description"
                        name="description"
                        style={{ marginTop: '16px' }}
                        fullWidth
                        multiline
                        minRows={4}
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.description && Boolean(formik.errors.description)}
                        helperText={formik.touched.description && formik.errors.description}
                        disabled={isSaving}
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
                        name="column"
                        fullWidth
                        value={formik.values.column}
                        style={{ marginTop: '16px' }}
                        onChange={formik.handleChange}
                        disabled={isSaving}
                    >
                        {columnOptions.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} disabled={isSaving}>
                        Cancel
                    </Button>
                    <Button type="submit" variant="contained" disabled={isSaving} startIcon={isSaving ? <CircularProgress size={16} /> : null}>
                        {isSaving ? 'Saving…' : 'Add Task'}
                    </Button>
                </DialogActions>
            </form>
        </Dialog>
    )
}

export default AddTaskDialog
