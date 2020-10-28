import { FORM_ACTIONS } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { resetState, setUpdated, updateFailed } from '../actions/formActions';
import userprofileupdateApi from '../apis/userprofileupdateApi';
import { alertMessage } from '../actions/alertActions';

//worker saga
function* userprofileupdateWorkerSaga(action) {
  try {
    yield call(userprofileupdateApi, action.value);
    yield put(
      alertMessage({ alert: true, alertText: 'profile Updated Successfully', color: 'info' })
    );
    yield put(setUpdated(true));
    yield put(resetState());
  } catch (error) {
    if (
      error == 'Error: Request failed with status code 401' ||
      error == 'Error: Request failed with status code 403'
    ) {
      yield put(alertMessage({ alert: true, alertText: 'Unauthorised access', color: 'danger' }));
    } else if (error == 'Error: Request failed with status code 500') {
      yield put(alertMessage({ alert: true, alertText: 'Internal Server Error', color: 'danger' }));
    } else {
      yield put(
        alertMessage({ alert: true, alertText: 'update failed... try again', color: 'danger' })
      );
    }
    yield put(updateFailed());
  }
}

//watcher saga
export default function* userprofileupdateWatcherSaga() {
  yield takeLatest(FORM_ACTIONS.UPDATE_REQUEST, userprofileupdateWorkerSaga);
}
