import { FORM_ACTIONS } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { updateProduct } from '../apis/updateProductApi';
import { setProductUpdated } from '../actions/formActions';

//worker saga
function* updateProductWorkerSaga(action) {
  try {
    yield call(updateProduct, action.value);
    yield put(setProductUpdated(true));
  } catch (error) {
    console.log('error', error);
  }
}

//watcher saga
export default function* updateProductSaga() {
  yield takeLatest(FORM_ACTIONS.UPDATE_PRODUCT_REQUEST, updateProductWorkerSaga);
}
