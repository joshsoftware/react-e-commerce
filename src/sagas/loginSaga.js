import { FORM_ACTIONS } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { setUserDetails, loginFailed } from '../actions/formActions';
import { alertMessage } from '../actions/alertActions';
import login from '../apis/loginApi';

//worker saga
function* loginWorkerSaga(action) {
  try {
    const { data } = yield call(login, action.value);
    yield put(setUserDetails(data));
  } catch (error) {
    yield put(alertMessage({ alert: true, alertText: 'Login Failed : Enter Correct Credentials' }));
    yield put(loginFailed(error));
  }
}

//watcher saga
export default function* loginSaga() {
  yield takeLatest(FORM_ACTIONS.LOGIN_REQUEST, loginWorkerSaga);
}
