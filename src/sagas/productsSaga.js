import { PRODUCT_LIST_REDUCER } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { setCartItems } from '../actions/cartActions';
import { setProductListItems } from '../actions/productListActions';

//worker saga
function* productWorkerSaga(action) {
  try {
    const { data } = yield call(setProductListItems, action.value);
    yield put(setCartItems(data));
  } catch (error) {
    console.log(error);
  }
}

//watcher saga
export default function* productSaga() {
  yield takeLatest(PRODUCT_LIST_REDUCER.GET_PRODUCT_LIST, productWorkerSaga);
}
