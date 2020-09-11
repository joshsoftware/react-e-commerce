import { CART_REDUCER } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { getCartItemsApi, deleteCartItemApi } from '../apis/cartApi';
import { setCartItems } from '../actions/cartActions';

//worker saga
function* cartWorkerSaga(action) {
  try {
    const { data } = yield call(getCartItemsApi, action.value);
    yield put(setCartItems(data));
  } catch (error) {
    console.log(error);
  }
}

function* cartDeleteWorkerSaga(action) {
  try {
    const { data } = yield call(deleteCartItemApi, action.value);
  } catch (error) {
    console.log(error);
  }
}

//watcher saga
export default function* cartWatcherSaga() {
  yield takeLatest(CART_REDUCER.GET_CART_ITEMS, cartWorkerSaga);
  // takeLatest(CART_REDUCER.DELETE_CART_ITEM_API, cartDeleteWorkerSaga)
}
