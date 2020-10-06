import { FORM_ACTIONS } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { addProduct } from '../apis/addProductAPI';
import { resetState, setProductAdded } from '../actions/formActions';
import { alertMessage } from '../actions/alertActions';

//worker saga
function* addProductWorkerSaga(action) {
  try {
    yield call(addProduct, action.value);
    yield put(alertMessage({ alert: true, alertText: 'Product Added Successfully' }));
    yield put(setProductAdded(true));
    yield put(resetState());
  } catch (error) {
    if (error == 'Error: Request failed with status code 400') {
      yield put(alertMessage({ alert: true, alertText: 'product_title already exists' }));
    } else if (error == 'Error: Request failed with status code 401') {
      yield put(alertMessage({ alert: true, alertText: 'Unauthorised Access' }));
    } else if (error == 'Error: Request failed with status code 404') {
      yield put(alertMessage({ alert: true, alertText: 'Page Not Found' }));
    } else {
      yield put(alertMessage({ alert: true, alertText: 'Internal Server Error' }));
    }
  }
}

//watcher saga
export default function* addProductSaga() {
  yield takeLatest(FORM_ACTIONS.ADD_PRODUCT_REQUEST, addProductWorkerSaga);
}
