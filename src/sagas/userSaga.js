import { USER_LIST_REDUCER } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getUserListApi } from '../apis/userApi';
import { setUserList } from '../actions/userListActions';

function* usersWorkerSaga(action) {
  try {
    const { data } = yield call(getUserListApi, action.value);
    console.log('Saga', data);
    yield put(setUserList(data));
    console.log('Users', data);
  } catch (error) {
    console.log('error', error);
  }
}

export default function* userWatcherSaga() {
  yield takeLatest(USER_LIST_REDUCER.GET_USER_LIST, usersWorkerSaga);
}
