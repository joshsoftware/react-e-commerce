import { FORM_ACTIONS } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { setRegistered, registrationFailed } from '../actions/formActions';
import userprofileupdateApi from '../apis/userprofileupdateApi';

//worker saga
function* userprofileupdateWorkerSaga(action) {
  console.log('worker');
  try {
    console.log('here1');
    const { data } = yield call(userprofileupdateApi, action.value);
    console.log(data);
    yield put(setRegistered(true));
  } catch (error) {
    console.log('error', error);
    yield put(registrationFailed(error));
  }
}

//watcher saga
export default function* userprofileupdateWatcherSaga() {
  console.log('watcher');
  yield takeLatest(FORM_ACTIONS.REGISTRATION_REQUEST, userprofileupdateWorkerSaga);
}
