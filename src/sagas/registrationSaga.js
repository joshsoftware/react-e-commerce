import { FORM_ACTIONS } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { setRegistered, registrationFailed } from '../actions/formActions';
import registration from '../apis/registrationApi';

//worker saga
function* registrationWorkerSaga(action) {
  try {
    const { data } = yield call(registration, action.value);
    yield put(setRegistered(true));
  } catch (error) {
    console.log('error', error);
    yield put(registrationFailed(error));
  }
}

//watcher saga
export default function* registrationSaga() {
  yield takeLatest(FORM_ACTIONS.REGISTRATION_REQUEST, registrationWorkerSaga);
}
