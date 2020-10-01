import { FORM_ACTIONS } from '../shared/actionConstants';
import { takeLatest, call, put } from 'redux-saga/effects';
import { updateProduct } from '../apis/updateProductApi';
import { setProductUpdated } from '../actions/formActions';
import { alertMessage } from '../actions/alertActions';
//worker saga
function* updateProductWorkerSaga(action) {
  try {
    yield call(updateProduct, action.value);
    yield put(alertMessage({ alert: true, alertText: 'Product Updated Successfully' }));
    yield put(setProductUpdated(true));
  } catch (error) {
    console.log('kjhghjh');
    if (error == 'Error: Request failed with status code 400') {
      yield put(alertMessage({ alert: true, alertText: 'Bad Request' }));
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
export default function* updateProductSaga() {
  yield takeLatest(FORM_ACTIONS.UPDATE_PRODUCT_REQUEST, updateProductWorkerSaga);
}
