import { FORM_ACTIONS } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { setRegistered, registrationFailed } from '../actions/formActions';
import registration from '../apis/registrationApi';
import { alertMessage } from '../actions/alertActions';

//worker saga
function* registrationWorkerSaga(action) {
  try {
    yield call(registration, action.value);
    yield put(setRegistered(true));
  } catch (error) {
    yield put(alertMessage({ alert: true, alertText: 'Email already exists' }));
    yield put(registrationFailed(error));
  }
}

//watcher saga
export default function* registrationSaga() {
  yield takeLatest(FORM_ACTIONS.REGISTRATION_REQUEST, registrationWorkerSaga);
}
