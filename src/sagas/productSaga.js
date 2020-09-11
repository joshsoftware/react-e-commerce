import { PRODUCT_LIST_REDUCER } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getProductListApi } from '../apis/productApi';
import { setProductList } from '../actions/productListActions';

//worker saga
function* productWorkerSaga() {
  try {
    const { data } = yield call(getProductListApi);
    console.log('products', data);
    yield put(setProductList(data));
  } catch (error) {
    console.log(error);
  }
}

//watcher saga
export default function* productWatcherSaga() {
  yield takeLatest(PRODUCT_LIST_REDUCER.GET_PRODUCT_LIST, productWorkerSaga);
}
