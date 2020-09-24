import { FORM_ACTIONS } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { searchFailed } from '../actions/formActions';
import searchbar from '../apis/searchbarApi';
import { resetProductList, setProductList } from '../actions/productListActions';

//worker saga
function* searchbarWorkerSaga(action) {
  try {
    const { data } = yield call(searchbar, action.value);
    yield put(resetProductList());
    yield put(setProductList(data));
  } catch (error) {
    console.log('error', error);
    yield put(searchFailed(error));
  }
}

//watcher saga
export default function* searchbarSaga() {
  yield takeLatest(FORM_ACTIONS.SEARCH_REQUEST, searchbarWorkerSaga);
}
