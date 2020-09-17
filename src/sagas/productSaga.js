import { PRODUCT_LIST_REDUCER } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getProductListApi } from '../apis/productApi';
import { setProductList } from '../actions/productListActions';
function* productsWorkerSaga(action) {
  try {
    const { data } = yield call(getProductListApi, action.value);
    yield put(setProductList(data));
  } catch (error) {
    console.log(error);
  }
}
// function* adminProductWorkerSaga(action) {
//   try {
//     const { data } = yield call(getProductListApi, action.value);
//     yield put(setProductList(data));
//   } catch (error) {
//     console.log(error);
//   }
// }
export default function* productWatcherSaga() {
  yield takeLatest(PRODUCT_LIST_REDUCER.GET_PRODUCT_LIST, productsWorkerSaga);
}
