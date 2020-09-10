import { FORM_ACTIONS } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { setUserDetails, loginFailed } from '../actions/formActions';
import login from '../apis/loginApi';

//worker saga
function* loginWorkerSaga(action) {
  try {
    const { data } = yield call(login, action.value);
    console.log('response', data);
    yield put(setUserDetails(data));
  } catch (error) {
    console.log(error);
    yield put(loginFailed(error));
  }
}

//watcher saga
export default function* loginSaga() {
  yield takeLatest(FORM_ACTIONS.LOGIN_REQUEST, loginWorkerSaga);
}
