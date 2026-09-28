import type { ReactElement, ReactNode } from 'react';
import { render } from '@testing-library/react';
import type { RenderOptions } from '@testing-library/react';
import { Provider } from 'react-redux';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { DragDropContext, Droppable } from '@hello-pangea/dnd';

import { createAppStore } from '../store';
import type { AppStore } from '../store';
import { theme, muiTheme } from '../libs/theme';

interface ProvidersOptions extends RenderOptions {
    store?: AppStore;
}

export function renderWithProviders(ui: ReactElement, { store = createAppStore(), ...options }: ProvidersOptions = {}) {
    function Wrapper({ children }: { children: ReactNode }) {
        return (
            <Provider store={store}>
                <MuiThemeProvider theme={muiTheme}>
                    <StyledThemeProvider theme={theme}>{children}</StyledThemeProvider>
                </MuiThemeProvider>
            </Provider>
        );
    }

    return { store, ...render(ui, { wrapper: Wrapper, ...options }) };
}

export function renderWithDragContext(ui: ReactElement, options?: ProvidersOptions) {
    return renderWithProviders(<DragDropContext onDragEnd={() => {}}>{ui}</DragDropContext>, options);
}

export function renderWithDnd(ui: ReactElement, options?: ProvidersOptions) {
    return renderWithProviders(
        <DragDropContext onDragEnd={() => {}}>
            <Droppable droppableId="test-droppable">
                {(provided) => (
                    <div ref={provided.innerRef} {...provided.droppableProps}>
                        {ui}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>,
        options,
    );
}

/** Для сторінок, які використовують react-router (Link, useNavigate тощо) поза власним Router. */
export function renderWithRouter(ui: ReactElement, { route = '/', ...options }: ProvidersOptions & { route?: string } = {}) {
    return renderWithProviders(<MemoryRouter initialEntries={[route]}>{ui}</MemoryRouter>, options);
}

/* eslint-disable react-refresh/only-export-components */
export * from '@testing-library/react';
