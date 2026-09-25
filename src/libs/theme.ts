import { createTheme } from '@mui/material/styles';
import type { ColumnId } from './types';

export const breakpoints = {
  xs: '0px',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1536px',
};

// export const devices = {
//   mobile: `(max-width: ${breakpoints.sm})`,
//   tablet: `(min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md})`,
//   desktop: `(min-width: ${breakpoints.md})`,
// };

export const devices = {
  mobile: `(max-width: 599.95px)`,
  tablet: `(min-width: ${breakpoints.sm}) and (max-width: 899.95px)`,
  desktop: `(min-width: ${breakpoints.md})`,
};

export const statusColors: Record<ColumnId, string> = {
    todo: '#7b8794',
    inProgress: '#d98e1f',
    done: '#2f8f6b',
}

export const colors = {
  primary: '#1f6f6b',
  primaryHover: '#175653',
  background: {
    default: '#e9eeec',
    paper: '#ffffff',
    wrapper: '#dfe6e3',
  },
  text: {
    primary: '#1b2b29',
    secondary: '#5b6b68',
    muted: '#7b8794',
  },
  border: {
    dashed: '#cfd8d4',
    light: '#d8dfdc',
    hover: '#1f6f6b',
  },
  shadow: 'rgba(23, 51, 47, 0.08)',
};

export const customTheme = {
  colors,
  breakpoints,
  devices,
  shadows: {
    card: `0px 1px 0px ${colors.shadow}`,
  },
  radii: {
    card: '8px',
    wrapper: '10px',
  },
  fontSizes: {
    small: '14px',
  },
};

export const muiTheme = createTheme({
  palette: {
    primary: { main: colors.primary },
    background: {
      default: colors.background.default,
      paper: colors.background.paper,
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: 'Inter, sans-serif',
    button: { textTransform: 'none', fontWeight: 600 },
  },
});

export const theme = {
  ...muiTheme,
  custom: customTheme,
};

export default theme;