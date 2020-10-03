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
    console.log('userDetails ->', JSON.parse(sessionStorage.getItem('userDetails')));
    yield put(setUserDetails(data));
  } catch (error) {
    if (error == 'Error: Request failed with status code 403') {
      yield put(alertMessage({ alert: true, alertText: 'User Disabled!', color: 'danger' }));
    } else if (error == 'Error: Request failed with status code 401') {
      yield put(
        alertMessage({
          alert: true,
          alertText: 'Login Failed : Enter Correct Credentials',
          color: 'danger'
        })
      );
    } else {
      yield put(alertMessage({ alert: true, alertText: 'Internal Server Error', color: 'danger' }));
    }
  }
}

//watcher saga
export default function* loginSaga() {
  yield takeLatest(FORM_ACTIONS.LOGIN_REQUEST, loginWorkerSaga);
}
