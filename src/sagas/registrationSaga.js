import { FORM_ACTIONS } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { setRegistered, registrationFailed } from '../actions/formActions';
import registration from '../apis/registrationApi';

//worker saga
function* registrationWorkerSaga(action) {
  console.log('worker');
  try {
    console.log('here1');
    const { data } = yield call(registration, action.value);
    console.log('in registration', data);
    yield put(setRegistered(true));
  } catch (error) {
    console.log('error', error);
    yield put(registrationFailed(error));
  }
}

//watcher saga
export default function* registrationSaga() {
  console.log('watcher');
  yield takeLatest(FORM_ACTIONS.REGISTRATION_REQUEST, registrationWorkerSaga);
}
