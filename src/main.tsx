import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'

import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'

import { ThemeProvider as StyledThemeProvider } from 'styled-components'

import App from './App.tsx'
import { theme, muiTheme } from './libs/theme.ts'
import { store } from './store'

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <Provider store={store}>
            <MuiThemeProvider theme={muiTheme}>
                <StyledThemeProvider theme={theme}>
                    <CssBaseline />
                    <App />
                </StyledThemeProvider>
            </MuiThemeProvider>
        </Provider>
    </StrictMode>
)
