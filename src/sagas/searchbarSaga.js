import { FORM_ACTIONS } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { searchFailed } from '../actions/formActions';
import searchbar from '../apis/searchbarApi';
import { setProductList } from '../actions/productListActions';

//worker saga
function* searchbarWorkerSaga(action) {
  console.log('worker in saga of searchbar', action.value);
  try {
    console.log('here1234');
    const { data } = yield call(searchbar, action.value);
    console.log(data);
    yield put(setProductList(data.products));
  } catch (error) {
    console.log('error', error);
    yield put(searchFailed(error));
  }
}

//watcher saga
export default function* searchbarSaga() {
  console.log('watcher searchbar');
  yield takeLatest(FORM_ACTIONS.SEARCH_REQUEST, searchbarWorkerSaga);
}
