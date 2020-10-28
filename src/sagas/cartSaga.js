import { CART_REDUCER } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getCartItemsApi } from '../apis/cartApi';
import { setCartItems } from '../actions/cartActions';

function* cartWorkerSaga(action) {
  try {
    const { data } = yield call(getCartItemsApi, action.value);
    yield put(setCartItems(data));
  } catch (error) {
    console.log('error', error);
  }
}

export default function* cartWatcherSaga() {
  yield takeLatest(CART_REDUCER.GET_CART_ITEMS, cartWorkerSaga);
}
