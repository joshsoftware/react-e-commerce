import { FORM_ACTIONS } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { alertMessage } from '../actions/alertActions';
import verifyUserApi from '../apis/verifyUserApi';

//worker saga
function* setPasswordWorkerSaga(action) {
  try {
    const { data } = yield call(verifyUserApi, action.value);
    console.log(data);
  } catch (error) {
    if (error.response.status == '400') {
      yield put(
        alertMessage({
          alert: true,
          alertText: 'Unauthorized access: Invalid URL',
          color: 'danger'
        })
      );
    } else {
      yield put(
        alertMessage({
          alert: true,
          alertText: error.response.data.error.message,
          color: 'danger'
        })
      );
    }
  }
}

//watcher saga
export default function* setPasswordSaga() {
  yield takeLatest(FORM_ACTIONS.SET_PASSWORD_REQUEST, setPasswordWorkerSaga);
}
