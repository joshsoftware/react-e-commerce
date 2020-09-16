import { USERPROFILE_REDUCER } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getUserProfileApi } from '../apis/userprofileApi';
import { setUserProfile } from '../actions/userprofileAction';

function* userprofileWorkerSaga(action) {
  try {
    const { data } = yield call(getUserProfileApi, action.value);
    yield put(setUserProfile(data));
  } catch (error) {
    console.log(error);
  }
}

//watcher saga
export default function* userprofileWatcherSaga() {
  yield takeLatest(USERPROFILE_REDUCER.GET_USER_PROFILE, userprofileWorkerSaga);
}
