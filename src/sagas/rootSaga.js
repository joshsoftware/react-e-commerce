import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import cartSaga from './cartSaga';
import productSaga from './productsSaga';

export default function* rootSaga() {
  yield all([loginSaga(), registrationSaga(), cartSaga(), productSaga()]);
}
