import { FORM_ACTIONS } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { searchFailed } from '../actions/formActions';
import searchbar from '../apis/searchbarApi';
import { resetProductList, setProductList } from '../actions/productListActions';
import { alertMessage } from '../actions/alertActions';

//worker saga
function* searchbarWorkerSaga(action) {
  try {
    const { data } = yield call(searchbar, action.value);
    yield put(resetProductList());
    yield put(setProductList(data));
  } catch (error) {
    console.log('error', error);
    if (error == 'Error: Request failed with status code 500') {
      yield put(alertMessage({ alert: true, alertText: 'Internal Server Error', color: 'danger' }));
    } else {
      yield put(
        alertMessage({
          alert: true,
          alertText: error.response.data.error.message,
          color: 'danger'
        })
      );
    }
    yield put(searchFailed(error));
  }
}

//watcher saga
export default function* searchbarSaga() {
  yield takeLatest(FORM_ACTIONS.SEARCH_REQUEST, searchbarWorkerSaga);
}
