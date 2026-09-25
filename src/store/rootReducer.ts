import { combineReducers } from 'redux';
import tasks from './ducks/tasks';

const rootReducer = combineReducers({ tasks });

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
