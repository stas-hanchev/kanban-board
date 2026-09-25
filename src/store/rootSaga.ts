import { all } from 'redux-saga/effects';
import { tasksSaga } from './ducks/tasks';

export default function* rootSaga() {
    yield all([tasksSaga()]);
}
