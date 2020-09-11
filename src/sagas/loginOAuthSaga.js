import { FORM_ACTIONS } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { setUserDetails, loginOAuthFailed } from '../actions/formActions';
import loginOAuth from '../apis/loginOAuth';

//worker saga
function* loginOAuthWorkerSaga(action) {
  try {
    console.log('dsds', action);
    const { data } = yield call(loginOAuth, action.value);

    console.log('response', data);
    yield put(setUserDetails(data));
  } catch (error) {
    console.log(error);
    yield put(loginOAuthFailed(error));
  }
}

//watcher saga
export default function* loginOAuthSaga() {
  yield takeLatest(FORM_ACTIONS.LOGINOAUTH_REQUEST, loginOAuthWorkerSaga);
}
