import { FORM_ACTIONS } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { setUpdated, updateFailed } from '../actions/formActions';
import userprofileupdateApi from '../apis/userprofileupdateApi';

//worker saga
function* userprofileupdateWorkerSaga(action) {
  try {
    const { data } = yield call(userprofileupdateApi, action.value);
    yield put(setUpdated(true));
  } catch (error) {
    console.log('error', error);
    yield put(updateFailed(error));
  }
}

//watcher saga
export default function* userprofileupdateWatcherSaga() {
  yield takeLatest(FORM_ACTIONS.UPDATE_REQUEST, userprofileupdateWorkerSaga);
}
