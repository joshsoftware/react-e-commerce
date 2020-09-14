import { PRODUCT_LIST_REDUCER } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getProductListApi, getProductByIdApi } from '../apis/productApi';
import { setProductList } from '../actions/productListActions';

//worker saga
function* productsWorkerSaga() {
  try {
    const { data } = yield call(getProductListApi);
    console.log('products', data);
    yield put(setProductList(data.products));
  } catch (error) {
    console.log(error);
  }
}

function* productWorkerSaga(action) {
  try {
    const { data } = yield call(getProductByIdApi, action.value);
    console.log('product', data);
  } catch (error) {
    console.log(error);
  }
}

//watcher saga
export default function* productWatcherSaga() {
  yield takeLatest(PRODUCT_LIST_REDUCER.GET_PRODUCT_LIST, productsWorkerSaga);
  yield takeLatest(PRODUCT_LIST_REDUCER.GET_PRODUCT, productWorkerSaga);
}
