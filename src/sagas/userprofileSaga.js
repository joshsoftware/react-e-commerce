import { USERPROFILE_REDUCER } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getUserProfileApi } from '../apis/userprofileApi';
import { setUserProfile } from '../actions/userprofileAction';

function* userprofileWorkerSaga(action) {
  try {
    console.log('full');
    const { data } = yield call(getUserProfileApi, action.value);
    console.log('data is', data);
    yield put(setUserProfile(data));
  } catch (error) {
    console.log(error);
  }
}

//watcher saga
export default function* userprofileWatcherSaga() {
  console.log('blank');
  yield takeLatest(USERPROFILE_REDUCER.GET_USER_PROFILE, userprofileWorkerSaga);
  // takeLatest(CART_REDUCER.DELETE_CART_ITEM_API, cartDeleteWorkerSaga)
}
