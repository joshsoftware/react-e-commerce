import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
//import cartSaga from './cartSaga';
//import productSaga from './productsSaga';
import loginOAuthSaga from './loginOAuthSaga';

export default function* rootSaga() {
  yield all([loginSaga(), registrationSaga(), loginOAuthSaga()]);
}
