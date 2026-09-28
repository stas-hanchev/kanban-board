import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';

import tasks, { tasksSaga } from './ducks/tasks';

const rootReducer = combineReducers({ tasks });

export type RootState = ReturnType<typeof rootReducer>;

function* rootSaga() {
    yield all([tasksSaga()]);
}

export function createAppStore() {
    const sagaMiddleware = createSagaMiddleware();

    const appStore = configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({ serializableCheck: false, immutableCheck: false }).concat(sagaMiddleware),
    });

    sagaMiddleware.run(rootSaga);

    return appStore;
}

export type AppStore = ReturnType<typeof createAppStore>;

export const store = createAppStore();

export type AppDispatch = typeof store.dispatch;
