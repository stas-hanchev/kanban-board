import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import CssBaseline from '@mui/material/CssBaseline';
import App from './App.tsx'

import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import { theme, muiTheme } from './libs/theme.ts'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <MuiThemeProvider theme={muiTheme}>
      <StyledThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </StyledThemeProvider>
    </MuiThemeProvider>
  </StrictMode>
)
