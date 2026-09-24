import { createTheme } from '@mui/material/styles';
import type { ColumnId } from './types';

export const statusColors: Record<ColumnId, string> = {
    todo: '#7b8794',
    inProgress: '#d98e1f',
    done: '#2f8f6b',
}

const theme = createTheme({
    palette: {
        primary: { main: '#1f6f6b' },
        background: { default: '#e9eeec', paper: '#ffffff' },
        text: { primary: '#1b2b29', secondary: '#5b6b68' },
    },
    shape: { borderRadius: 8 },
    typography: {
        fontFamily: 'Inter, sans-serif',
        button: { textTransform: 'none', fontWeight: 600 },
    },
});

export default theme;