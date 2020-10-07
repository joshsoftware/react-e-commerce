import { FORM_ACTIONS } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { resetState, setRegistered } from '../actions/formActions';
import registration from '../apis/registrationApi';
import { alertMessage, alertRegistration } from '../actions/alertActions';

//worker saga
function* registrationWorkerSaga(action) {
  try {
    yield call(registration, action.value);
    yield put(
      alertRegistration({ alert: true, alertText: 'Successfully Registered', color: 'info' })
    );
    yield put(setRegistered(true));
    yield put(resetState());
  } catch (error) {
    if (error.response.status == '500') {
      yield put(
        alertMessage({
          alert: true,
          alertText: error.response.statusText,
          color: 'danger'
        })
      );
    } else {
      yield put(
        alertMessage({ alert: true, alertText: error.response.data.error.message, color: 'danger' })
      );
    }
  }
}

//watcher saga
export default function* registrationSaga() {
  yield takeLatest(FORM_ACTIONS.REGISTRATION_REQUEST, registrationWorkerSaga);
}
