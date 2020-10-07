import { FORM_ACTIONS } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { setUserDetails } from '../actions/formActions';
import { alertMessage } from '../actions/alertActions';
import login from '../apis/loginApi';

//worker saga
function* loginWorkerSaga(action) {
  try {
    const { data } = yield call(login, action.value);
    sessionStorage.setItem('userDetails', JSON.stringify(data));
    yield put(setUserDetails(data));
  } catch (error) {
    console.log('error ', error.response);
    yield put(
      alertMessage({
        alert: true,
        alertText: error.response.data.error.message,
        color: 'danger'
      })
    );
  }
}

//watcher saga
export default function* loginSaga() {
  yield takeLatest(FORM_ACTIONS.LOGIN_REQUEST, loginWorkerSaga);
}
