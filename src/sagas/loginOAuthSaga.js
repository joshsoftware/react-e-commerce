import { FORM_ACTIONS } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { setUserDetails, loginOAuthFailed } from '../actions/formActions';
import loginOAuth from '../apis/loginOAuth';
import { alertMessage } from '../actions/alertActions';

//worker saga
function* loginOAuthWorkerSaga(action) {
  try {
    const { data } = yield call(loginOAuth, action.value);

    yield put(setUserDetails(data));
  } catch (error) {
    if (error == 'Error: Request failed with status code 403') {
      yield put(alertMessage({ alert: true, alertText: 'User Disabled!' }));
    } else {
      yield put(
        alertMessage({ alert: true, alertText: 'Login Failed : Enter Correct Credentials' })
      );
    }
    yield put(loginOAuthFailed(error));
  }
}

//watcher saga
export default function* loginOAuthSaga() {
  yield takeLatest(FORM_ACTIONS.LOGINOAUTH_REQUEST, loginOAuthWorkerSaga);
}
