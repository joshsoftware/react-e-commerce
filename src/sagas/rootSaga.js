import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import cartSaga from './cartSaga';

export default function* rootSaga() {
  yield all([loginSaga(), registrationSaga(), cartSaga()]);
}
