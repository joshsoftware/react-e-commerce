import { CART_REDUCER } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getCartItemsApi, deleteCartItemApi } from '../apis/cartApi';
import { setCartItems } from '../actions/cartActions';

//worker saga
function* cartWorkerSaga(action) {
  try {
    const { data } = yield call(getCartItemsApi, action.value);
    console.log('data is', data);
    yield put(setCartItems(data));
  } catch (error) {
    console.log(error);
  }
}

//watcher saga
export default function* cartWatcherSaga() {
  yield takeLatest(CART_REDUCER.GET_CART_ITEMS, cartWorkerSaga);
}
