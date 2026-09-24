import { createTheme } from '@mui/material/styles';
import type { ColumnId } from './types';

declare module '@mui/material/styles' {
  interface Theme {
    custom: {
      colors: typeof colors;
      breakpoints: typeof breakpoints;
      devices: typeof devices;
      shadows: {
        card: string;
      };
      radii: {
        card: string;
        wrapper: string;
      };
      fontSizes: {
        small: string;
      };
    };
  }

  interface ThemeOptions {
    custom?: Theme['custom'];
  }
}

export const statusColors: Record<ColumnId, string> = {
    todo: '#7b8794',
    inProgress: '#d98e1f',
    done: '#2f8f6b',
}

export const breakpoints = {
  xs: '0px',
  sm: '600px',
  md: '900px',
  lg: '1200px',
  xl: '1536px',
};

export const devices = {
  mobile: `(max-width: ${breakpoints.sm})`,
  tablet: `(min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md})`,
  desktop: `(min-width: ${breakpoints.md})`,
};

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

export const theme = createTheme({
  palette: {
    primary: { main: colors.primary },
    background: { 
      default: colors.background.default, 
      paper: colors.background.paper 
    },
    text: { 
      primary: colors.text.primary, 
      secondary: colors.text.secondary 
    },
  },
  shape: { borderRadius: 8 },
  typography: {
    fontFamily: 'Inter, sans-serif',
    button: { textTransform: 'none', fontWeight: 600 },
  },
  // Кастомні поля для styled-components
  custom: {
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
  },
});

export default theme;