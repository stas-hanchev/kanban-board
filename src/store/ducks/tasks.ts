import { call, put, takeEvery } from 'redux-saga/effects';
import type { PayloadAction } from './actionTypes';
import type { ColumnData, ColumnId, Task } from '../../libs/types';

// ---------- Action Types ----------
const ADD_TASK_REQUEST = 'kanban/tasks/ADD_TASK_REQUEST';
const ADD_TASK_SUCCESS = 'kanban/tasks/ADD_TASK_SUCCESS';
const ADD_TASK_FAILURE = 'kanban/tasks/ADD_TASK_FAILURE';

// ---------- State ----------
export interface TasksState {
    byColumn: Record<ColumnId, Task[]>;
    isSaving: boolean;
    error: string | null;
}

const COLUMN_TITLES: Record<ColumnId, string> = {
    todo: 'To Do',
    inProgress: 'In Progress',
    done: 'Done',
};

const initialState: TasksState = {
    byColumn: {
        todo: [],
        inProgress: [],
        done: [],
    },
    isSaving: false,
    error: null,
};

// ---------- Reducer ----------
interface AddTaskRequestPayload {
    columnId: ColumnId;
    title: string;
    description: string;
}

interface AddTaskSuccessPayload {
    columnId: ColumnId;
    task: Task;
}

interface AddTaskFailurePayload {
    error: string;
}

type TasksAction =
    | PayloadAction<typeof ADD_TASK_REQUEST, AddTaskRequestPayload>
    | PayloadAction<typeof ADD_TASK_SUCCESS, AddTaskSuccessPayload>
    | PayloadAction<typeof ADD_TASK_FAILURE, AddTaskFailurePayload>;

export default function tasksReducer(state = initialState, action: TasksAction): TasksState {
    switch (action.type) {
        case ADD_TASK_REQUEST:
            return { ...state, isSaving: true, error: null };

        case ADD_TASK_SUCCESS: {
            const { columnId, task } = action.payload;
            return {
                ...state,
                isSaving: false,
                byColumn: {
                    ...state.byColumn,
                    [columnId]: [...state.byColumn[columnId], task],
                },
            };
        }

        case ADD_TASK_FAILURE:
            return { ...state, isSaving: false, error: action.payload.error };

        default:
            return state;
    }
}

// ---------- Action Creators ----------
export const addTaskRequest = (
    columnId: ColumnId,
    title: string,
    description: string,
): PayloadAction<typeof ADD_TASK_REQUEST, AddTaskRequestPayload> => ({
    type: ADD_TASK_REQUEST,
    payload: { columnId, title, description },
});

const addTaskSuccess = (
    columnId: ColumnId,
    task: Task,
): PayloadAction<typeof ADD_TASK_SUCCESS, AddTaskSuccessPayload> => ({
    type: ADD_TASK_SUCCESS,
    payload: { columnId, task },
});

const addTaskFailure = (error: string): PayloadAction<typeof ADD_TASK_FAILURE, AddTaskFailurePayload> => ({
    type: ADD_TASK_FAILURE,
    payload: { error },
});

// ---------- Selectors ----------
export const selectColumns = (state: { tasks: TasksState }): ColumnData[] =>
    (Object.keys(COLUMN_TITLES) as ColumnId[]).map((id) => ({
        id,
        title: COLUMN_TITLES[id],
        tasks: state.tasks.byColumn[id],
    }));

export const selectIsSaving = (state: { tasks: TasksState }): boolean => state.tasks.isSaving;
export const selectError = (state: { tasks: TasksState }): string | null => state.tasks.error;

// ---------- Mock API ----------
function requestCreateTask(title: string, description: string): Promise<Task> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (!title.trim()) {
                reject(new Error('Назва задачі не може бути порожньою'));
                return;
            }
            resolve({
                id: `task-${Date.now()}-${Math.round(Math.random() * 1000)}`,
                title: title.trim(),
                description: description.trim() || undefined,
            });
        }, 600);
    });
}

// ---------- Saga ----------
function* handleAddTask(action: PayloadAction<typeof ADD_TASK_REQUEST, AddTaskRequestPayload>) {
    const { columnId, title, description } = action.payload;
    try {
        const task: Task = yield call(requestCreateTask, title, description);
        yield put(addTaskSuccess(columnId, task));
    } catch (err) {
        yield put(addTaskFailure(err instanceof Error ? err.message : 'Unable to create the task'));
    }
}

export function* tasksSaga() {
    yield takeEvery(ADD_TASK_REQUEST, handleAddTask);
}
