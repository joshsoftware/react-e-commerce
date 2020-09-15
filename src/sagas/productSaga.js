import { PRODUCT_LIST_REDUCER } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getProductListApi } from '../apis/productApi';
import { setProductList } from '../actions/productListActions';
function* productsWorkerSaga(action) {
  try {
    console.log('Inn Sama', action.value);
    const { data } = yield call(getProductListApi, action.value);
    console.log('product data is', data);
    yield put(setProductList(data.products));
  } catch (error) {
    console.log(error);
  }
}

export default function* productWatcherSaga() {
  yield takeLatest(PRODUCT_LIST_REDUCER.GET_PRODUCT_LIST, productsWorkerSaga);
}
