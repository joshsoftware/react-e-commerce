import { FORM_ACTIONS } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { addProduct } from '../apis/addProductAPI';
import { setProductAdded } from '../actions/formActions';

//worker saga
function* addProductWorkerSaga(action) {
  try {
    console.log('in worker');
    const { data } = yield call(addProduct, action.value);
    console.log(data);
    yield put(setProductAdded(true));
  } catch (error) {
    console.log('error', error);
  }
}

//watcher saga
export default function* addProductSaga() {
  console.log('in watcher');
  yield takeLatest(FORM_ACTIONS.ADD_PRODUCT_REQUEST, addProductWorkerSaga);
}
