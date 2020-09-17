import { all } from 'redux-saga/effects';
import loginSaga from './loginSaga';
import registrationSaga from './registrationSaga';
import loginOAuthSaga from './loginOAuthSaga';
import cartWatcherSaga from './cartSaga';
import productWatcherSaga from './productSaga';
import footerWatcherSaga from './footerSaga';
import userprofileWatcherSaga from './userprofileSaga';
import userprofileupdateWatcherSaga from './userprofileupdateSaga';
import addProductSaga from './addProductSaga';

export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga(),
    loginOAuthSaga(),
    cartWatcherSaga(),
    productWatcherSaga(),
    footerWatcherSaga(),
    userprofileWatcherSaga(),
    userprofileupdateWatcherSaga(),
    addProductSaga()
  ]);
}
