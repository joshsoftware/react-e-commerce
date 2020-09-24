import { FORM_ACTIONS } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { addProduct } from '../apis/addProductAPI';
import { setProductAdded } from '../actions/formActions';

//worker saga
function* addProductWorkerSaga(action) {
  try {
    yield call(addProduct, action.value);
    yield put(setProductAdded(true));
  } catch (error) {
    console.log('error', error);
  }
}

//watcher saga
export default function* addProductSaga() {
  yield takeLatest(FORM_ACTIONS.ADD_PRODUCT_REQUEST, addProductWorkerSaga);
}
